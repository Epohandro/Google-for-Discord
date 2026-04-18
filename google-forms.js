const POST_URL = "https://discord.com/api/webhooks/!"; 

function onSubmit(e) {
  try {
    const response = e.response;
    const form = FormApp.getActiveForm();
    const itemResponses = response.getItemResponses();
    
    const responseNumber = form.getResponses().length; 
    const adminUrl = "https://docs.google.com/forms/d/" + form.getId() + "/edit#responses"; // link to edit google forms

    let userEmail = response.getRespondentEmail() || "Error";
    let discordUserMention = "Error"; // 
    let items = [];
    let embedColor = 16777215; 

    for (const responseAnswer of itemResponses) {
      const question = responseAnswer.getItem().getTitle();
      const answer = responseAnswer.getResponse();
      const answerString = Array.isArray(answer) ? answer.join(", ") : answer.toString();

      if (!answerString.trim()) continue;

      const qLower = question.toLowerCase();
      if (qLower.includes("your discord")) {
        const isId = /^\d{17,19}$/.test(answerString.trim());
        if (isId) {
          discordUserMention = `<@${answerString.trim()}>`;
        } else {
          discordUserMention = `\`${answerString}\``;
        }
      }

// USE question blocks if it is appropriate in the form. The original form can be seen at the link https://forms.gle/fCRAdRoMkH9CgZSy8
      if (question === "What do you want to do with this form?") { 
        if (answerString.includes("Report a problem")) {
          embedColor = 12597547;
        } else if (answerString.includes("Create feedback")) {
          embedColor = 5793266;
        }
      }

      if (userEmail === "Error" && (qLower.includes("email") || qLower.includes("почта"))) {
        userEmail = answerString;
      }

      const parts = combinedValue.match(/[\s\S]{1,1024}/g) || [];
      parts.forEach((part, index) => {
        items.push({
          "name": index === 0 ? question : `${question} (next)`,
          "value": part,
          "inline": false
        });
      });
    }

    const payload = {
      "content": "<@471250372841832448>", // mentioning the user before the message
      "embeds": [{
        "description": `### [Message №${responseNumber}](${adminUrl})\nUser mail: ${discordUserMention}\n`,
        "fields": items,
        "color": embedColor,
        "footer": { 
          "text": "user mail: " + userEmail,
        },
        "timestamp": new Date().toISOString()
      }]
    };

    const options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };

    UrlFetchApp.fetch(POST_URL, options);

  } catch (err) {
    console.error("Er: " + err.message);
  }
}

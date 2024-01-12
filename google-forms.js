const POST_URL = "WEBHOOK URL"; // You need to change the WEBHOOK URL to your url

function onSubmit(e) 
{
    const response = e.response.getItemResponses();
    let items = [];

    for (const responseAnswer of response) 
    {
        const question = responseAnswer.getItem().getTitle();
        const answer = responseAnswer.getResponse();
        let parts = []

        try 
        {
            parts = answer.match(/[\s\S]{1,1024}/g) || [];
        } 
        catch (e) 
        {
            parts = answer;
        }

        if (!answer) 
        {
            continue;
        }

        for (const [index, part] of Object.entries(parts)) 
        {
            if (index == 0) 
            {
                items.push
                ({
                    "name": question,
                    "value": part,
                    "inline": false
                });
            } 
            else 
            {
                items.push
                ({
                    "name": question.concat(" (cont.)"),
                    "value": part,
                    "inline": false
                });
            }
        }
    }

    const options = 
    {
        "method": "post",
        "headers": 
        {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify
        ({
            // The value in quotation marks ( "" ) is optional
            "content": "", // Text before sending the webhook
            "embeds": 
            [{
                "title": "", // The title of the form
                "fields": items,
                "color": 886011, // Color design. You can view the decimal color codes at https://www.mathsisfun.com/hexadecimal-decimal-colors.html
                "author": 
                {
                    "name": "", // Author name
                    "url": "", // Author name link
                    "icon_url": "" // Author image
                },
                "url": "", // Link on title
                "thumbnail": 
                {
                    "url": "" // Thumbnail for embedding
                },
                "image": 
                {
                    "url": "" // Image for embedding
                },
                "footer": 
                {
                    "text": "by Epohandro", // Footer for embedding
                    "icon_url": "" // Image in footer
                },
                "description": "", // Description for embedding
                "timestamp": new Date().toISOString()
            }]
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};

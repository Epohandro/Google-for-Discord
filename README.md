# Google-for-Discord
Google Forms for Discord Integration
#
#
# What is the project for and what does it do?
This project is necessary for those Discord users who want to use the integration of sending via webhooks using Google forms on their Discord server.

The need for this may appear after the user sees it from his friend/acquaintance /mysterious stranger on the server and is interested in implementing the same or similar.

Next, according to the author, there will be a clear guide on how and what to work with.

There are many similar manuals on the Internet and as many explanations of how to work with code and forms, so you need to understand that here is only the subjective opinion of the author.

The usage guide was created by Epohandro in 2024 and will be updated as far as possible, if necessary.
#
#
# Getting started with the project
1. You need to create a [Google Form](https://docs.google.com/forms/u/0/)
For example, I will create a form of 2 questions. I also find it strange to show the instructions for creating the form.

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/87059e77-5072-4320-a45f-5ad4fe9b5b1c)

2. After we have created the form, we go to "Advanced" (3 vertical dots, in the upper right corner) and click on the "Script editor" item

![google-forms](https://github.com/Epohandro/Google-for-Discord/assets/100685424/cbe9549a-ea79-4b7e-b326-0d873feaab61)

3. Now we need to give a name to our future project, let's use "Question" as an example

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/aca3445e-3d82-459f-88b2-40efccb9cf50)

4. The next step is to insert the code that is in the file google-forms.js . It can also be edited, study the comments in the code.

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/5db22f01-6256-4b28-9e46-782df639df90)

5. After that, go to the triggers and configure them.

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/a02f441b-75cd-41a6-b46a-d72862fa822a)

5. 1. Click on the add trigger button.
   2. The only thing we need to change is the "Select event type". It should be changed to "On form submit".

![google-forms 2](https://github.com/Epohandro/Google-for-Discord/assets/100685424/914a2e3b-291d-40d0-94da-6b6a4c4e8351)

5. 3. Click the "Save" button
   4. Log in to your Google Account (through which you created the form)
   5. After logging in, 99% of the time you will get an error about "Google hasn't verified this app", this is normal. You need to click on "Advanced" and a little lower on "Go to ... (unsafe)". This error occurs because we wrote our code ourselves and Google cannot scan it.

![google-forms 3](https://github.com/Epohandro/Google-for-Discord/assets/100685424/e1149c4b-1693-4ab1-9f3b-bead8d520e8f)

5. 6. And then give the necessary permissions.

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/c96561f2-199d-40ff-a867-e67e8bf5b0b9)

5. 7. *If an error occurs, just try the same procedure again, sometimes it happens
#
#
# Let's summarize everything
As a result of this short course on working with Google Forms and Discord integration, you have learned how to use forms and webhooks.

Congratulations to you!

![image](https://github.com/Epohandro/Google-for-Discord/assets/100685424/df05ca47-6c51-4e7a-8e9d-087f5b953278)

If you want to support me in any way, you can tell your friends or mysterious strangers about it, and also (only for users who know Russian) [join my Discord server](https://discord.gg/YqNBYau) 

Words of gratitude, if any, are accepted everywhere and in any language.

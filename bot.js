const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

}});

 

client.on('message', message => {

    if (message.content === 'สวัสดี') {

       message.reply('สวัสดีครับผมกายเอง');

       }

 
 client.on('message', message => {

    if (message.content === 'ข้อมูลบอทกาย') {

       message.reply('```ผู้สร้างบอท:เมกุมินสุดน่ารัก#9484```');

       }

 }});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

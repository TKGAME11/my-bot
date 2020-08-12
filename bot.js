const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

       });

 

client.on('message', message => {

    if (message.content === 'สวัสดี') {

       message.reply('สวัสดีผมกายเอง');

       });
 
 
 
client.on('massage', message => {
  
    if (message.content === 'ข้อมูลบอทกาย') {
     
       message.reply('ผู้สร้าง: เมกุมินสุดน่ารัก#9484');
     
      });
 
 
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

/*
DON'T MODIFY THIS CODE
This code is responsible for handling donation related commands..
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    console.log(`Command received: ${command}`);

    let message = `
*We appreciate your support! 🙏*
    
To help us keep improving, consider following us on Instagram. Every new follower brings us joy and motivation! 

Our Instagram😁: @drastic_roy 
https://instagram.com/drasticroy

Remember, even the smallest support can make a huge difference!
Donate to KoFi😪 https://ko-fi.com/drasticroy

Additionally, if you'd like to contribute directly my paypal is drasticroy. Your support means the world to us!`;

    let img = 'https://cdn.jsdelivr.net/gh/drasticroy/api/donate.jpg'; 

    console.log("Sending message and image...");
    await conn.sendFile(m.chat, img, 'donation.jpg', message, m, false, rpyp);
    console.log("Message and image sent.");
};

handler.help = ['Donation'];
handler.tags = ['Main'];
handler.command = ['donate', 'support', 'contribute'];

export default handler;

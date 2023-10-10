let handler = async (m, { conn }) => {
  try {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = conn.getName(who);
    
    // Get the profile picture as a direct link
    let pp = await conn.profilePictureUrl(who);
    
    conn.sendFile(m.chat, global.API('https://api.popcat.xyz/wanted?image=', {
      avatar: pp, 
    }), 'wanted.png', `💀⚡ *Wanted :* ${name}\n\nWanted by the law☠️? `, m);
  } catch (error) {
    console.error(error);
    // Handle the error, e.g., send an error message to the user.
    conn.reply(m.chat, 'An error occurred. Please try again later.', m);
  }
}

handler.help = ['wanted @user'];
handler.tags = ['want'];
handler.command = ['wanted'];

export default handler;

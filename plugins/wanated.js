let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  conn.sendFile(m.chat, global.API('https://api.popcat.xyz/wanted?image=', {
    avatar: pp, 
  }), 'wanted.png', `🏳️‍🌈  *Wanted :* ${name}\n\nWanted by the law☠️? `, m)
}

handler.help = ['wanted @user']
handler.tags = ['want']
handler.command = ['wanted'] 

export default handler

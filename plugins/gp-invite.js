
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Nkt can you enter the number you want to send a group invite to\n\n📌 Example :\n*${usedPrefix + command}*254740279985`
if (text.includes('+')) throw  `Enter number without *+*`
if (isNaN(text)) throw ' 📌 Enter only numbers without your country code with no spaces'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *INVITATION TO GROUP*\n\nA person invited you to join this group \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ The invite link was sent`) 

}
handler.help = ['invite <254xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler

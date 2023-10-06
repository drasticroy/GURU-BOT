
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["Yamete Kudasai", "Guru1", "step", "Guru2", "Guru3", "Guru4"])}.mp3`

m.reply( `Hello ${taguser} Need help😢?  type /help 😊 or contact Roy 😁on +254740279985 `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|drastic|roy|guru)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

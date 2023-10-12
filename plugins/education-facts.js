import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    	try {
			let fak = await fetch(global.API("lolhuman", "`", {}, "apikey"))
			let ta = await fak.json()
			await conn.reply(m.chat, "*Did you Know?*\n" + ta.result + "\n\n*Powered by:* Drastic Roy😁", m)
    	} catch (e) {
    	try {
    	let fak = await fetch(global.API("zenz", "/randomtext/faktaunik", {}, "apikey"))
			let ta = await fak.json()
			await conn.reply(m.chat, "*Did you Know*\n" + ta.result.message + "\n\n*Powered by:* zenzapi and Drastic Roy😁", m)
    	} catch (e) {
    		throw eror
    		}
    	}
}
handler.help = ['facts']
handler.tags = ['education']
handler.command = /^(fact)$/i
export default handler

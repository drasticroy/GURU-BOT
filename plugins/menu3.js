/* Guru Bot - Recoded By Drastic Roy */
import {
    promises,
    readFileSync
} from "fs"
import {
    join
} from "path"
import {
    xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

const defaultMenu = {
    before: `%dash

%m1 *U S E R*
%m2 *Name:* %name
%m2 *Tag:* %tag
%m2 *Status:* %prems
%m2 *Limit:* %limit
%m2 *Money:* %money
%m2 *Role:* %role
%m2 *Level:* %level [ %xp4levelup Xp For Levelup]
%m2 *Xp:* %exp / %maxexp
%m2 *Total Xp:* %totalexp
%m3

%m1 *T O D A Y*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wita
%m3

%m1 *I N F O*
%m2 *Bot Name:* %me
%m2 *Mode:* %mode
%m2 *Platform:* %platform
%m2 *Type:* Node.Js
%m2 *Baileys:* Multi Device
%m2 *Prefix:* [ *%_p* ]
%m2 *Uptime:* %muptime
%m2 *Database:* %rtotalreg dari %totalreg
%m3

%m1 *I N F O  C M D* 
%m4 *%totalfeatures* Command
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
%readmore
`.trimStart(),
    header: "%cc *%category* %c1",
    body: "%c2 %cmd %isPremium %islimit",
    footer: "%c3",
    after: "%c4                %me",
}
let handler = async (m, {
    conn,
    usedPrefix: _p,
    __dirname,
    args
}) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "⏳",
 key: m.key,
   }
  })
  
  let tags = {}
    let teks = `${args[0]}`.toLowerCase()
    let arrayMenu = ["all", "absen", "admin", "advanced", "anonymous", "ai", "gpt", "audio", "Baileys", "database", "downloader", "edukasi", "fun", "game", "genshin", "group", "host", "info", "internet", "jadian", "jadibot", "kerang", "main", "maker", "music", "nocategory", "nsfw", "nulis", "owner", "premium", "primbon", "quotes", "quran", "random", "rpg", "sticker", "tools", "vote", "xp", "store", "virus", "thnks"]
    if (!arrayMenu.includes(teks)) teks = "404"
    if (teks == "all") tags = {
        "main": "Main",
        "rpg": "RolePlay Games",
        "xp": "Exp & Limit",
        "sticker": "Sticker",
        "fact": "Education",
        "quran": "Al Quran",
        "ai": "AI",
        "gpt": "GPT",
        "tools": "Tools",
        "primbon": "Primbon",
        "fun": "Fun",
        "game": "Game",
        "genshin": "GENSHIN IMPACT",
        "quotes": "Quotes",
        "audio": "Audio",
        "maker": "Maker",
        "music": "Music",
        "downloader": "Downloader",
        "internet": "Internet",
        "random": "Random",
        "nsfw": "Nsfw",
        "nulis": "MagerNulis & Logo",
        "anonymous": "Anonymous Chat",
        "database": "Database",
        "admin": "Admin",
        "group": "Group",
        "vote": "Voting",
        "absen": "Absen",
        "premium": "Premium",
        "advanced": "Advanced",
        "info": "Info",
        "owner": "Owner",
        "jadibot": "Jadi Bot",
        "host": "Host",
        "Baileys": "Baileys",
        "store": "Store Menu",
        "virus": "𐐪-〚 Virtex 〛-𐑂",
        "thnks": "Thanks To Drastic Roy",
        "nocategory": "No Category"
    }
    if (teks == "absen") tags = {
        "absen": "Absen"
    }
    if (teks == "admin") tags = {
        "admin": "Admin"
    }
    if (teks == "advanced") tags = {
        "advanced": "Advanced"
    }
    if (teks == "anonymous") tags = {
        "anonymous": "Anonymous Chat"
    }
    if (teks == "audio") tags = {
        "audio": "Audio"
    }
    if (teks == "Baileys") tags = {
        "Baileys": "Baileys"
    }
    if (teks == "database") tags = {
        "database": "Database"
    }
    if (teks == "downloader") tags = {
        "downloader": "Downloader"
    }
    if (teks == "edukasi") tags = {
        "edukasi": "Edukasi"
    }
    if (teks == "fun") tags = {
        "fun": "Fun"
    }
    if (teks == "game") tags = {
        "game": "Game"
    }
    if (teks == "genshin") tags = {
        "genshin": "Genshin Impact"
    }
    if (teks == "group") tags = {
        "group": "Group"
    }
    if (teks == "host") tags = {
        "host": "Host"
    }
    if (teks == "info") tags = {
        "info": "Info"
    }
    if (teks == "internet") tags = {
        "internet": "Internet"
    }
    if (teks == "jadian") tags = {
        "jadian": "Jadian"
    }
    if (teks == "jadibot") tags = {
        "jadibot": "Jadi Bot"
    }
    if (teks == "kerang") tags = {
        "kerang": "Kerang Ajaib"
    }
    if (teks == "main") tags = {
        "main": "Main"
    }
    if (teks == "maker") tags = {
        "maker": "Maker"
    }
    if (teks == "music") tags = {
        "music": "Music"
    }
    if (teks == "nsfw") tags = {
        "nsfw": "Nsfw"
    }
    if (teks == "nulis") tags = {
        "nulis": "MagerNulis & Logo"
    }
    if (teks == "owner") tags = {
        "owner": "Owner"
    }
    if (teks == "premium") tags = {
        "premium": "Premium"
    }
    if (teks == "primbon") tags = {
        "primbon": "Primbon"
    }
    if (teks == "quotes") tags = {
        "quotes": "Quotes"
    }
    if (teks == "quran") tags = {
        "quran": "Al Quran"
    }
    if (teks == "ai") tags = {
        "ai": "AI"
    }
    if (teks == "gpt") tags = {
        "gpt": "GPT"
    }
    if (teks == "random") tags = {
        "random": "Random"
    }
    if (teks == "rpg") tags = {
        "rpg": "RolePlay Games"
    }
    if (teks == "sticker") tags = {
        "sticker": "Sticker"
    }
    if (teks == "tools") tags = {
        "tools": "Tools"
    }
    if (teks == "vote") tags = {
        "vote": "Voting"
    }
    if (teks == "xp") tags = {
        "xp": "Exp & Limit"
    }
    if (teks == "store") tags = {
        "store": "Store Menu"
    }
    if (teks == "virus") tags = {
        "virus": "𐐪-〚 Virtex 〛-𐑂"
    }
    if (teks == "thnks") tags = {
        "thnks": "Thanks To Drastic Roy"
    }
    if (teks == "nocategory") tags = {
        "nocategory": "No Category"
    }
    try {
        // DEFAULT MENU
        let dash = global.dashmenu
        let m1 = global.dmenut
        let m2 = global.dmenub
        let m3 = global.dmenuf
        let m4 = global.dmenub2

        // COMMAND MENU
        let cc = global.cmenut
        let c1 = global.cmenuh
        let c2 = global.cmenub
        let c3 = global.cmenuf
        let c4 = global.cmenua

        // LOGO L P
        let lprem = global.lopr
        let llim = global.lolm
        let tag = `@${m.sender.split("@")[0]}`

        /* Gobal */
        let glb = global.db.data.users
        let usrs = glb[m.sender]

        /* Hiasan List */
        let spas = "                "
        let spas2 = "         "
        let mojis = "╰╴"
        let index = 0
        let ktnya = ["You ask?", "No spam...", "Thanks..", "Displaying...", "Wait up...", "Process...", "Loading...", "Ask..", "Woah..."]
        let ktx = ktnya.getRandom()

        /* TIME ZONE*/
        let wib = moment.tz("Africa/Nairobi").format("HH:mm:ss")
        let wibh = moment.tz("Africa/Nairobi").format("HH")
        let wibm = moment.tz("Africa/Nairobi").format("mm")
        let wibs = moment.tz("Africa/Nairobi").format("ss")
        let wita = moment.tz("Africa/Nairobi").format("HH:mm:ss")
        let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

        /* Info Menu */
        let mode = global.opts["self"] ? "Private" : "Publik"
        let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
        let {
            age,
            exp,
            limit,
            level,
            role,
            registered,
            money
        } = glb[m.sender]
        let {
            min,
            xp,
            max
        } = xpRange(level, global.multiplier)
        let name = await conn.getName(m.sender)
        let premium = glb[m.sender].premiumTime
        let prems = `${premium > 0 ? "Premium": "Free"}`
        let platform = os.platform()

        //-----------TIME---------
        let ucpn = `${ucapan()}`
        let d = new Date(new Date + 3600000)
        let locale = "id"
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: "long"
        })
        let date = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
        let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send("uptime")
            _muptime = await new Promise(resolve => {
                process.once("message", resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)

        /* Button List Section */
        const sections = [{
            title: spas + " MAIN " ,
            rows: [{
                    title: "⚡GURU BOT RECODED",
                    rowId: _p + "ping",
                    description: "DISPLAYS RESPONSE SPEED OF THE BOT"
                },
                {
                    title: "💌 OWNER BOT",
                    rowId: _p + "owner",
                    description: "Dipslays THE CURRENT OWNER"
                },
                {
                    title: "📔 SCRIPT BOT",
                    rowId: _p + "sc",
                    description: `Source Code😒For The Pussies`
                },
            ]
        }, {
            title: spas +  " SUPPORT " ,
            rows: [{
                    title: "🔖 RENT-still in development",
                    rowId: _p + "rent",
                    description: "Rent The Bot For Your Own shit"
                },
                {
                    title: "🌟 LIST PREMIUM USERS 😎",
                    rowId: _p + "premlist",
                    description: "Menampilkan list harga premium"
                },
                {
                    title: "💹 DONATION",
                    rowId: _p + "donate",
                    description: "Support BOT for better speed and updates"
                },
            ]
        }, {
            title: spas + " MENU " ,
            rows: [{
                    title: ++index + "." + spas + "🧧 All Menus".toUpperCase(),
                    rowId: _p + "menulist all",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🗒️ Missing Menu".toUpperCase(),
                    rowId: _p + "menulist absen",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🤵‍ Admin Menu".toUpperCase(),
                    rowId: _p + "menulist admin",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🧰 Advanced Menu".toUpperCase(),
                    rowId: _p + "menulist advanced",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎭 Anonymous Menu".toUpperCase(),
                    rowId: _p + "menulist anonymous",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎙️ Audio Menu".toUpperCase(),
                    rowId: _p + "menulist audio",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🤖 Baileys Menu".toUpperCase(),
                    rowId: _p + "menulist Baileys",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "💾 Database Menu".toUpperCase(),
                    rowId: _p + "menulist database",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📥 Downloader Menu".toUpperCase(),
                    rowId: _p + "menulist downloader",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📔 Education Menu".toUpperCase(),
                    rowId: _p + "menulist edukasi",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🪄 Fun Menu".toUpperCase(),
                    rowId: _p + "menulist fun",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎮 Game Menu".toUpperCase(),
                    rowId: _p + "menulist game",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "⚡ Genshin Menu".toUpperCase(),
                    rowId: _p + "menulist genshin",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "👨‍👩‍👦‍👦 Group Menu".toUpperCase(),
                    rowId: _p + "menulist group",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🖥️ Host Menu".toUpperCase(),
                    rowId: _p + "menulist host",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "ℹ️ Info Menu".toUpperCase(),
                    rowId: _p + "menulist info",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📡 Internet Menu".toUpperCase(),
                    rowId: _p + "menulist internet",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "💌 Invented Menu".toUpperCase(),
                    rowId: _p + "menulist jadian",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🐚 Shell Menu".toUpperCase(),
                    rowId: _p + "menulist kerang",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📮 Main Menu".toUpperCase(),
                    rowId: _p + "menulist main",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎨 Maker Menu".toUpperCase(),
                    rowId: _p + "menulist maker",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎶 Music Menu".toUpperCase(),
                    rowId: _p + "menulist music",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "❌ Nocategory Menu".toUpperCase(),
                    rowId: _p + "menulist nocategory",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🔞 Nsfw Menu".toUpperCase(),
                    rowId: _p + "menulist nsfw",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "✏️ Nulis Menu".toUpperCase(),
                    rowId: _p + "menulist nulis",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🧑🏻‍💻 Owner Menu".toUpperCase(),
                    rowId: _p + "menulist owner",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "💎 Premium Menu".toUpperCase(),
                    rowId: _p + "menulist premium",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📜 Primbon Menu".toUpperCase(),
                    rowId: _p + "menulist primbon",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "💬 Quotes Menu".toUpperCase(),
                    rowId: _p + "menulist quotes",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🕋 Quran Menu".toUpperCase(),
                    rowId: _p + "menulist quran",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🪄 AI Menu".toUpperCase(),
                    rowId: _p + "menulist ai",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🎊 Random Menu".toUpperCase(),
                    rowId: _p + "menulist random",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🕹️ RPG Menu".toUpperCase(),
                    rowId: _p + "menulist rpg",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🏮 Sticker Menu".toUpperCase(),
                    rowId: _p + "menulist sticker",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "🛠️ Tools Menu".toUpperCase(),
                    rowId: _p + "menulist tools",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "📊 Vote Menu".toUpperCase(),
                    rowId: _p + "menulist vote",
                    description: spas + spas2 + mojis + ktx
                },
                {
                    title: ++index + "." + spas + "✉️ XP Menu".toUpperCase(),
                    rowId: _p + "menulist xp",
                    description: spas + spas2 + mojis + ktx
                }
            ]
        }, {
            title: spas + " OTHER " ,
            rows: [{
                    title: "🏪 STORE",
                    rowId: _p + "menulist store",
                    description: "Menampilkan list store"
                },
                {
                    title: "🦠 VIRUS ⚠️💀",
                    rowId: _p + "menulist virus",
                    description: "Menampilkan list virus"
                },
                {
                    title: "❌ NO CATEGORY",
                    rowId: _p + "menulist nocategory",
                    description: "Menu tanpa kategori"
                }
            ]
        }]

        let tek = `👋 Hai, ${ucapan()} ${conn.getName(m.sender)}

${spas} *[ U S E R  I N F O ]*
👥 *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
📧 *ᴛᴀɢs:* @${m.sender.split`@`[0]}
💎 *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? "Yes": "No"}

${spas} *[ S T A T U S  I N F O ]*
🖥️ *ᴜᴘᴛɪᴍᴇ:* ${muptime}
⏰ *ᴛɪᴍᴇ:* ${waktuwita}
🕵🏻‍♂️ *ᴜsᴇʀs:* ${Object.keys(glb).length}
⚡ *ʟɪᴍɪᴛ:* ${usrs.limit}
📣 *ʟᴇᴠᴇʟ:* ${usrs.level}
🧰 *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
🧧 *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
${clockStringP(usrs.premiumTime - new Date())}` : ""}
`
        const listMessage = {
            text: tek,
            footer: "📮 *Note:* If you encounter any difficulty or Bugs😪, just dm owner",
            mentions: await conn.parseMention(tek),
            title: htki + " *LIST MENU* " + htka,
            buttonText: " CLICK HERE " + emojis,
            sections
        }
        if (teks == "404") {
        /*
            return conn.sendMessage(m.chat, listMessage, {
                quoted: m,
                mentions: await conn.parseMention(tek),
                contextInfo: {
                    forwardingScore: 99999,
                    isForwarded: true
                }
            })
            */
            // Biasa
            let sects = sections[2].rows.map((v, index ) => {
                return `${v.title.slice(16)}
${v.rowId}`.trim()
            }).filter(v => v).join("\n\n")
            
        
        // Biasa
        let caption = tek + "\n\n" + spas + "*[ C O M M A N D ]*\n" + sects
        return await conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
            externalAdReply: {
                title: wm,
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "",
                mediaUrl: pp,
            },
            mentionedJid: [m.sender],
        },
    });
    await conn.sendReact(m.chat, "✅", m.key)
        }

        /* Info Total */
        let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
        let totalreg = Object.keys(glb).length
        let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: "customPrefix" in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        let groups = {}
        for (let tag in tags) {
            groups[tag] = []
            for (let plugin of help)
                if (plugin.tags && plugin.tags.includes(tag))
                    if (plugin.help) groups[tag].push(plugin)
        }
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by Drastic Roy https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before,
            ...Object.keys(tags).map(tag => {
                return header.replace(/%category/g, tags[tag]) + "\n" + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                        return menu.help.map(help => {
                            return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                                .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                                .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                                .trim()
                        }).join("\n")
                    }),
                    footer
                ].join("\n")
            }),
            after
        ].join("\n")
        let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
        let replace = {
            "%": "%",
            p: _p,
            uptime,
            muptime,
            me: conn.getName(conn.user.jid),
            npmname: _package.name,
            npmdesc: _package.description,
            version: _package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp,
            github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
            tag,
            dash,
            m1,
            m2,
            m3,
            m4,
            cc,
            c1,
            c2,
            c3,
            c4,
            lprem,
            llim,
            ucpn,
            platform,
            wita,
            mode,
            _p,
            money,
            age,
            tag,
            name,
            prems,
            level,
            limit,
            name,
            weton,
            week,
            date,
            dateIslamic,
            time,
            totalreg,
            totalfeatures,
            rtotalreg,
            role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
        

        //------------------< MENU >----------------
        /*
        let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6"]
        let pilih = pusat.getRandom()
        if (pilih == "ke1") {
            await conn.sendButton(m.chat, text.trim(), author, knimg, [
                [emojis + " All Menu", _p + "allmenu"],
                [emojis + " List Menu", _p + "menulist"]
            ], fakes, fakefb)
        }
        if (pilih == "ke2") {
            await conn.send2ButtonLoc(m.chat, knimg, text.trim(), author, emojis + " All Menu", _p + "allmenu", emojis + " List Menu", _p + "menulist", fakes, fakefb)
        }
        if (pilih == "ke3") {
            await conn.send2ButtonVid(m.chat, knimg, text.trim(), author, emojis + " All Menu", _p + "allmenu", emojis + " List Menu", _p + "menulist", fakes, adReplyS)
        }
        if (pilih == "ke4") {
            await conn.sendTemplateButtonLoc(m.chat, knimg, text.trim(), author, emojis + " List Menu", _p + "menulist", fakes, fakefb)
        }
        if (pilih == "ke5") {
            await conn.relayMessage(m.chat, {
                requestPaymentMessage: {
                    currencyCodeIso4217: "USD",
                    amount1000: fsizedoc,
                    requestFrom: m.sender,
                    noteMessage: {
                        extendedTextMessage: {
                            text: text.trim(),
                            contextInfo: {
                                mentionedJid: [m.sender],
                                externalAdReply: {
                                    showAdAttribution: true
                                }
                            }
                        }
                    }
                }
            }, {})
        }
        if (pilih == "ke6") {
            await conn.send2ButtonDoc(m.chat, text.trim(), author, emojis + " All Menu", _p + "allmenu", emojis + " List Menu", _p + "menulist", fakes, adReply)
        }
        
        // Biasa
        if (pilih) {
        let biasa = "_Ketik *.menubiasa* jika menu tidak muncul_"
        await conn.sendMessage(m.chat, { text: biasa }, { quoted: m })
        }
        // Sound
        var vn = "https://github.com/drasticroy/A17/blob/master/Assets/audio/Yamete.mp3"
        await conn.sendMessage(m.chat, { audio: { url: vn }, seconds: fsizedoc, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100,0,100,0,100,0,100] }, { quoted: m })
        */
        // Biasa
        let caption = text.trim()
        await conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
            externalAdReply: {
                title: wm,
                mediaType: 1,
                sourceUrl: "",
                mediaUrl: pp,
            },
            mentionedJid: [m.sender],
        },
    });
    await conn.sendReact(m.chat, "✅", m.key)
        // Biasa
        
    } catch (e) {
        conn.reply(m.chat, "Sorry, the menu run into an error", m)
        throw e
    }
}
handler.command = /^(menulist)$/i

handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
    const time = moment.tz("Asia/Makassar").format("HH")
    let res = "Hey There ☀️"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time >= 10) {
        res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}

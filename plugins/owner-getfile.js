import fs from 'fs'
import syntaxError from 'syntax-error'
import path from 'path'

const _fs = fs.promises

let handler = async (m, { text, usedPrefix, command, __dirname }) => {
    if (!text) {
        throw `
✳️ user  : ${usedPrefix + command} <name file>

📌 Example:
        ${usedPrefix}getfile main.js
        ${usedPrefix}getplugin owner
`.trim();
    }

    const fileExists = await _fs.access(text)
        .then(() => true)
        .catch(() => false);

    if (!fileExists) {
        
        throw `❌ The specified file "${text}" does not exist in the DB😢.`;
    }

    if (/p(lugin)?/i.test(command)) {
        const filename = text.replace(/plugin(s)\//i, '') + (/\.js$/i.test(text) ? '' : '.js')
        const pathFile = path.join(__dirname, filename)
        const file = await _fs.readFile(pathFile, 'utf8')
        m.reply(file)
        const error = syntaxError(file, filename, {
            sourceType: 'module',
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
        })
        if (error) {
            await m.reply(`
❎ Bug found in *${filename}*:

${error}

`.trim())
        }

    } else {
        const isJavascript = /\.js/.test(text)
        if (isJavascript) {
            const file = await _fs.readFile(text, 'utf8')
            m.reply(file)
            const error = syntaxError(file, text, {
                sourceType: 'module',
                allowReturnOutsideFunction: true,
                allowAwaitOutsideFunction: true
            })
            if (error) {
                await m.reply(`
❎ Bug found in *${text}*:

${error}

`.trim())
            }
        } else {
            const file = await _fs.readFile(text, 'base64')
            await m.reply(Buffer.from(file, 'base64'))
        }
    }
}
handler.help = ['plugin', 'file'].map(v => `get${v} <name file>`)
handler.tags = ['owner']
handler.command = /^g(et)?(p(lugin)?|f(ile)?)$/i

handler.rowner = true

export default handler

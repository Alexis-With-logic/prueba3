let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}š¬ššššššš š ššššššš šššš šššššš\š¬šššššš\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `š¬ššššššš š ššššššš šššš šššššš\nš¬šššššš\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `š¬š ššššššš ššš ššššššš(š) š\nšµš ššššš šššš š ${gt}`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.group = true
handler.admin = true 
export default handler 

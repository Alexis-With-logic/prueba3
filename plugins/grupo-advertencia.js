let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}ππΌ ππππΎπππ *#on antitoxicos* ππππΌ πΏπππΌπΎππππΌπΏπΌ, πΏππ½π πΏπ πΌπΎππππΌπ πΏππΎππΌ ππππΎπππ ππΌππΌ πΏπππ½ππππππΌπ ππππ πΎπππΌππΏπ`, fkontak, m) 

let who
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${lenguajeGB['smsAvisoMG']()}ππππππππ πΌ ππΌ πππππππΌ πππ ππΌ πππΎππ½ππ ππΌ πΌπΏπππππππΎππΌ β οΈ\n\nπππππππ\n*${usedPrefix + command} @tag Motivo*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${lenguajeGB['smsAvisoMG']()}πΏππ½π πΏπ πππΎπππ½ππ ππ ππππππ ππΌππΌ πΌπΏππππππ\n\nπππππππ\n*${usedPrefix + command} @tag Motivo*`
try {
user.warn += 1

await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} πππΎππ½ππ πππΌ πΌπΏπππππππΎππΌ ππ ππππ πππππ!!\n\nπ«΅ *${text}*`, `*ADVERTENCIA*\nβ οΈ *${user.warn}/4*\n\n${wm}`, img, [
[`π­ ππ ππππππ`, '.ok'],
['βοΈ ππππ', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`ππ ππ πΌπΏππππππΏ ππΌπππΌπ πππΎππ!!\n*@${who.split`@`[0]}* ππππππΌπππ ππΌπ *4* πΌπΏπππππππΎππΌπ πΌππππΌ ππππΌπ πππππππΌπΏπ(πΌ) π`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*ALGO SALIΓ MAL.*\nπππΎπππ½ππ *${usedPrefix + command} @tag Motivo*\n\n\`\`\`REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``, m)
}}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) throw conn.sendHydrated(m.chat, 'πππππ§π, π₯ππ₯ππ‘, π€ π©ππππ§ππ¨\nππͺπππ πͺπ¨ππ§ π‘π€π¨ ππ€π©π€π£ππ¨ π₯ππ§π ππͺπππ§ π€ π©ππ’πππΜπ£ π₯πͺπππ πͺπ¨ππ§ ππ¨π©π€π¨ ππ€π’ππ£ππ€:\n.ppt π₯ππππ§π\n.ppt π₯ππ₯ππ‘\n.ppt π©ππππ§π\n\nππ¨π ππ£ π’ππ£πͺπ¨ππͺπ‘ππ¨', wm, pp, null, null, null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['π₯ππ₯ππ‘ π', `${usedPrefix + command} papel`],
['π©ππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`π° ππππΌππ! π€\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +500 πΏπ·`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ ππΌ ππΌππΌπΏπ! π\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +1000 πΏπ·`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`ππΌ ππππΏππΏπ! π€‘\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nβ π·πππππ -300 πΏπ·`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ ππΌ ππΌππΌπΏπ! π\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +1000 πΏπ·`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`ππΌ ππππΏππΏπ! π€‘\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nβ π·πππππ -300 πΏπ·`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ ππΌ ππΌππΌπΏπ! π\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +1000 πΏπ·`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`ππΌ ππππΏππΏπ! π€‘\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nβ π·πππππ -300 πΏπ·`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ ππΌ ππΌππΌπΏπ! π\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +1000 πΏπ·`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`ππΌ ππππΏππΏπ! π€‘\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nβ π·πππππ -300 πΏπ·`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ ππΌ ππΌππΌπΏπ! π\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nπ π·πππππ +1000 πΏπ·`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`ππΌ ππππΏππΏπ! π€‘\n\nππ» π»π: ${text}\nππ» π¬π πππ: ${astro}\nβ π·πππππ -300 πΏπ·`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
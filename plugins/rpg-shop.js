const xpperlimit = 400
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    //conn.reply(m.chat, `
    let gata = `
β­ββγ π«ππππ ππ ππππππ γβββ¬£
β πͺπππππ πππππππππ  : +${count} π 
β *π―π πππππππ* :  -${xpperlimit * count} ππ
β°βββββγ *π  ${vs}* γβββββ¬£`.trim()
    
await conn.sendHydrated(m.chat, gata, wm, null, md, 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['π΅ πͺπππππ π10', '.buy 10'],
['πΈ πͺπππππ π20', '.buy 20'],
['π πͺπππππ πππ πππππππππ', '/buy2']
], m,)
    
  } else //conn.reply(m.chat, `β Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantesπ`, m)
  await conn.sendHydrated(m.chat, `*π΅π πππππ ππππππππππ πΏπ· ππππ πππππππ ${count} ππππππππ* π\n\n*π³π ππππππππππ πππ πππππππππΜππ πππ π»ππ π³ππππππ-ππππ πππππππ πππππππππππ, πππππ πππ ππ πππππππππππ πππ ππ πππππππ ${usedPrefix}exp o ${usedPrefix}experiencia. π»πππππΜπ πππππ πππππππ πππ πππππππππ πππ ππ πππππππ${usedPrefix}buy2*`, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['π πͺπππππ πππ πππππππππ', '/buy2'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)
}
handler.help = ['Buy1', 'Buyall']
handler.tags = ['xp']
handler.register = true
handler.command = ['buy1', 'buyall'] 

handler.disabled = false

export default handler

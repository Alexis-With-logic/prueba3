let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('*π¨ πΎππ ππ ππππ ππππππ!!*')
}
let val = text
.replace(/[^0-9\-\/+*ΓΓ·ΟEe()piPI/]/g, '')
.replace(/Γ/g, '*')
.replace(/Γ·/g, '/')
.replace(/Ο|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'Ο')
.replace(/Math\.E/g, 'e')
.replace(/\//g, 'Γ·')
.replace(/\*Γ/g, 'Γ')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw `${mg}π°ππππππ ππ πππππππππ ππππππΜππππ ππππ ππππππππ ππ πππππππππ`
throw `${fg}πΊπππ ππ ππππππ ππΜπππππ π ππΜππππππ,  -, +, * , /, Γ, Γ·, Ο, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.limit = 1
handler.register = true
handler.exp = 5
export default handler

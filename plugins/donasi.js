const qrku = "https://telegra.ph/file/7afbf076e9fda30859f07.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • All 」
│ • Pulsa [088271782505]
| • Untuk Payment Lain Chat Owner
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

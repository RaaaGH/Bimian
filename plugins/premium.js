const qrku = "https://telegra.ph/file/7afbf076e9fda30859f07.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Buy • Premium 」
│ • Tanya Owner
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['hargapremium', 'premium']
handler.tags = ['about']
handler.command = /^harga(premium)$/i

module.exports = handler

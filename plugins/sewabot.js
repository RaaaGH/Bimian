const qrku = "https://telegra.ph/file/3e6bb603b15d263b9c406.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • All 」
│ • 1 Minggu 5k
│ • 1 Bulan 10k
│ • Mau Sewa? Chat Owner
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['sewa', 'sewabot']
handler.tags = ['about']
handler.command = /^(sewa?bot)$/i

module.exports = handler

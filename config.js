let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '6aceac403a3d479b',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.adiofficial.xyz': 'apikey lu'
}

global.wait = '_*ð¬ðððð§ð  ðð¢ ð©ð«ð¨ð¬ðð¬ ...*_'
global.eror = '_*Ð¼Î±Î±Æ ÑÑÑÎ½ÑÑ ÑÎ¹âÎ±Ðº ÑÑÎ±Ð²Î¹â..*_'
global.Intervalmsg = 1800 //detik

//========Url Template Buttons=========//
global.dtu = 'GROUP BOTZ'
global.urlnya = "https://chat.whatsapp.com/ElWAM7irWS13d4R29HpbV1"

//============= callButtons =============//
global.dtc = 'á´á´ÊÊ á´á´¡É´á´Ê'
global.phn = '+62 882-7178-2505'

//============= Games ================//
global.benar = '_*Benarâ*_'
global.salah = '_*Salahâ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = data.namabot;
global.author = data.owner;

//=========== Requirements ==========//  
        global.colong1 = 'Ciss ð¸'
        global.colong2 = 'By Tianchi'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð§¬',
      limit: 'ð',
      healt: 'â¤ï¸',
      exp: 'âï¸',
      money: 'ðµ',
      potion: 'ð¥¤',
      diamond: 'ð',
      common: 'ð¦',
      uncommon: 'ð',
      mythic: 'ð³ï¸',
      legendary: 'ðï¸',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ð¥¼',
      fishingrod: 'ð£',
      pickaxe: 'âï¸',
      sword: 'âï¸',
      kayu: 'ðªµ',
      batu: 'ðª¨',
      iron: 'âï¸',
      string: 'ð¸ï¸',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      makananpet: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

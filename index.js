import * as cheerio from 'cheerio'

const res = await fetch(
  'https://www.vlr.gg/164485/nom-esports-vs-b8-esports-challengers-league-east-surge-split-1-w6'
)
const text = await res.text()

const $ = cheerio.load(text)
const card = $('span.match-header-vs-note')
console.log($(card).html())

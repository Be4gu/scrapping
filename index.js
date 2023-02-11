import * as cheerio from 'cheerio'

const res = await fetch('https://www.vlr.gg/team/matches/1034/nrg-esports/?group=upcoming')
const text = await res.text()

const $ = cheerio.load(text)
const card = $('a.wf-card')
console.log($(card).html())

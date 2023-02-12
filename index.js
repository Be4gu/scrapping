import * as cheerio from 'cheerio'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const URLS = {
  matches: 'https://www.vlr.gg/matches',
}

async function scrape(url) {
  const res = await fetch(url)
  const text = await res.text()
  return cheerio.load(text)
}

const $ = await scrape(URLS.matches)
let times = []
$('div.ml-eta').each((index, el) => {
  times.push({ item: $(el).text() })
})

const filePath = path.join(process.cwd(), './db/times.json')

await writeFile(filePath, JSON.stringify(times, null, 2), 'utf-8')

console.log(filePath)

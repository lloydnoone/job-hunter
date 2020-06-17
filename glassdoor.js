const puppeteer = require('puppeteer')

let browser = null
let page = null

const BASE_URL = 'https://glassdoor.co.uk/'

const glassdoor = {

  initialize: async () => {
    console.log('Initializing glassdoor...')

    browser = await puppeteer.launch({
      headless: false
    })

    page = await browser.newPage()
    page.setViewport({ width: 1366, height: 768 })
    page.on('console', message => {
      console.log(`message from the browser: ${message.text()}`)
    })

    await page.goto(BASE_URL, { waitUntil: 'networkidle2' })

    console.log('initialization completed. ')
  },

  login: async (email, password) => {

    await page.waitFor('#userEmail')
    await page.click('a[data-ga-lbl="Sign In"]')
    await page.type('form[name="emailSignInForm"] #userEmail', email)
    await page.type('form[name="emailSignInForm"] #userPassword', password)
    await page.click('form[name="emailSignInForm"] button')
  }
}

module.exports = glassdoor
const dotenv = require('dotenv').config()
const glassdoor = require('./glassdoor');


(async () => {

  await glassdoor.initialize()

  await glassdoor.login(process.env.EMAIL, process.env.PASSWORD)

  //await browser.close()
})()
const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "kiwimochi.aternos.me",
    port: "55097",
    username: "WALANGBUHAY",
    version: false
    })
    bot.on('login', function() {
      bot.chat('Hello')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('24 ATERNOS > Bot started! - Made By HIROWALANGUTAK')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('24 ATERNOS > Bot stoped! - Made By HIROWALANGUTAK')
            bot.clearControlStates()
            break
          }
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()

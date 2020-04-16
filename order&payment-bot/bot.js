const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot('1199330846:AAHu1OJ-VettFLmUTDq6qx0rSOp02V6lbvU')

const user = require('./HelperBot/user')

const request = require('request')


bot.onText(/\/start|\hallo/, msg => {
    console.log(msg)
    user.findUser(msg.chat.id)
    .then(response =>{
        const name = msg.from.first_name;
      if (!response.data.data) {
        bot.sendMessage(msg.chat.id, `Hello *${name}*, selamat datang di *shoppa*. Saya *Ecommercebot*, siap melayani permintaan anda.`, {
          parse_mode: "Markdown"
        }).then(() => {
          bot.sendMessage(msg.chat.id, "Untuk memudahkan transaksi, ijinkan saya mencatat nama lengkap, alamat dan nomor telepon anda.").then(() => {
            bot.sendMessage(msg.chat.id, `Kirimkan data anda melalui command */d* dengan format berikut:\n*NoTelepon*-*NamaLengkap*-*Alamat*\n\nContoh:\n*/d* *08123123123*-*John Doe*-*Bandung*`, {
              parse_mode: "Markdown"
            });
          })
        })
      }
      else {
        bot.sendMessage(msg.chat.id, `Hello *${name}*, apa kabar? Silahkan browsing produk-produk kami dengan command */product*.`, {
          parse_mode: "Markdown"
        })
      }
    })
});
	
bot.onText()
	
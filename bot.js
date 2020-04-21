const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot('1166428491:AAGkGsgq-Goof3DQwvTVXPUSpeamQ0D6tzk',{ polling: true})

const user = require('./HelperBot/user')

// var request = require('request')
// const axios = require("axios");


bot.onText(/\/start|\hallo/, msg => {
    console.log(msg)
    user.findUser(msg.chat.id)
    .then(response =>{
        const name = msg.from.first_name;
      if (!response.data.data) {
        bot.sendMessage(msg.chat.id, `Hello *${name}*, selamat datang di *my-shop*. Saya *Ecommercebot*, siap melayani permintaan anda.`, {
          parse_mode: "Markdown"
        }).then(() => {
          bot.sendMessage(msg.chat.id, "Untuk melihat-lihat produk yang tersedia bisa dilihat dengan mengklik /product.").then(() => {
            bot.sendMessage(msg.chat.id, "dan untuk memsan produk bisa mengklik /order", {
              parse_mode: "Markdown"
            });
          })
        })
      }
    })
});

bot.onText(/\/product/, msg => {
    let inline_keyboard = (e) => [
      [
        {
          text: "Add to Cart",
          callback_data: JSON.stringify(e.cart)
        },
        {
          text: "Detail",
          callback_data: JSON.stringify(e.detail)
        }
      ]
    ];
      
      user.getProducts()
          .then(response => {
              const data = response.data.data;
              console.log(response.data.data);
              
              data.forEach(e => {
                  let x = {
                      cart: {
                          id: e.id,
                          action: 'cart'
                      },
                      detail: {
                          id: e.id,
                          action: 'desc'
                      }
                  };
                  
                  bot.sendMessage(
                      msg.chat.id,
                      `
          *Nama*: ${e.name}\n*Harga*: ${e.price}
          `,
                      {
                          reply_markup: {
                              inline_keyboard: inline_keyboard(x)
                          },
                          parse_mode: "Markdown"
                      }
                  );
              });
          })
          .catch(err => {
              console.log(err.message);
          });
  });

// order dari user
bot.onText(/\/order/, msg =>{
    bot.sendMessage(msg.chat.id, `Hallo ${msg.chat.first_name}, sebelum order kamu harus isi data lengkap dibawah dulu ya`);
    bot.sendMessage(msg.chat.id, `dengan mengetik :*/d* dengan format berikut:\n*NoTelepon*-*NamaLengkap*-*Email*\n\nContoh:\n*/d* *08123123123*-*John Doe*-*rendy@gmail.com* `);
})

//menambahkan new user
bot.onText(/^\/d (.+)$/, (msg, match) => {
	console.log('msg = ', msg);
  const [phone, full_name, address] = match[1].split("-");
  console.log('address = ', address);
  const id = msg.chat.id;
  const name = msg.from.first_name;

  user.addUser(full_name, name, phone, id, address)
    .then(() => {
      bot.sendMessage(
        msg.chat.id,
        `Selamat *${name}*, data anda telah tersimpan. Silahkan browsing produk-produk kami dengan menggunakan command /product.`,
        { parse_mode: "Markdown" }
      );
    })
    .catch(err => {
       if (err.response.data.message == 'Validation error') {
        bot.sendMessage(
          msg.chat.id,
          `*${name}*, data anda sudah tersimpan dalam database kami. Silahkan langsung browsing produk-produk kami.`,
          { parse_mode: "Markdown" }
        );
       }
      console.log(err.response.data);
    });
});

bot.onText(/\/me/, msg => {
  user.findUser(msg.chat.id)
    .then(response => {
        const item = response.data.data;
        console.log(item);
        bot.sendMessage(
          msg.chat.id,
          `Nama: ${item.username}\nNama Lengkap: ${item.full_name}\nAlamat: ${item.address}\nNo. Telepon: ${item.phone_number}`,
          { parse_mode: "Markdown" }
        );
    })
    .catch(err => {
      console.log(err.message);
    });
  user.getOrder(msg.chat.id)
    .then(response => {
      console.log('data: ', response.data.data)
    })
    .catch(err => {
      console.log(err.response);
    });
});
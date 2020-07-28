var port = process.env.PORT || 8000;
const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const bot = new Discord.Client();

bot.login("NzAyNTk4NzI1MzM5NDQ3Mzc4.XqCZwA.30jYfz3PcQAtZClag9dgyUJngys");

//------------------------changement de l'activité du bot---------------------------------------
bot.on("ready", function () {
  bot.user.setActivity("du piano", { type: "PLAYING" });
  const val = bot.users.get("191206465955037184");
  val.user.setActivity(" du piano", { type: "PLAYING" });
});

//---------------------renvoie ecrit------------------------------------------------------------
bot.on("message", function (message) {
  if (message.content === "test") {
    message.delete();
    message.channel.send("test réussi");
  }
  if (message.content === "/help") {
    message.delete();
    message.channel.send(
      "commande disponible: /queen yt, /queen1, /queen2, /queen3, /queen4, /queen5, /queen6, /queen7"
    );
  }
});

//------------------ Aboiement vocal-----------------------------------------------------------
bot.on("message", async (message) => {
  if (message.content === "/queen yt") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(
      ytdl("https://www.youtube.com/watch?v=TkFHYODzRTs", {})
    );
  }

  if (message.content === "/queen1") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/bohemian_rhapsody.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen2") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/death_on_two_legs.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen3") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/good_company.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen4") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/im_in_love_with_my_car.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen5") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/lazing_on_a_sunday.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen6") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/love_of_my_life.mp3", {
      volume: 1,
    });
  }
  if (message.content === "/queen7") {
    message.delete();
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play("./song/sweet_lady.mp3", { volume: 1 });
  }
});

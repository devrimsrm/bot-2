const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  //-------------------------------------------------------------------------------\\

  if (
    !["825807370135142472"].some(role =>
      message.member.roles.cache.get(role)
    ) &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .setDescription(
            `${message.author} Komutu kullanmak için yetkin bulunmamakta.`
          )
          .setColor("0x800d0d")
          .setAuthor(
            message.member.displayName,
            message.author.avatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      .then(x => x.delete({ timeout: 5000 }));

  //-------------------------------------------------------------------------------\\

  let ramo = "**Sesli Kanalda Olan Yetkililer:**\n";
  let ramo2 = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get("825807405953581088").members.map(r => {
    ramo += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    ramo2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  return message.channel.send("" + ramo + "" + ramo2 + "");
};
module.exports.conf = {
  aliases: ["sesli", "ysay"]
};

module.exports.help = {
  name: "ysay"
};

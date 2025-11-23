require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ]
});

// Quando o bot liga
client.on("ready", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

// Boas-vindas automáticas
client.on("guildMemberAdd", (member) => {
  const channelId = "1441972545548058696"; // coloque aqui o ID do canal de welcome
  const channel = member.guild.channels.cache.get(channelId);
  if (!channel) return;

  channel.send({
    content: `👋 Welcome ${member}!   We're glad to have you here!`,
    embeds: [
      {
        image: { url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDl6ZmM3ajg4bnlsa2s2cjBqaHZuZ2NldmYwbjA0NDkwMjR2NHJubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lJNoBCvQYp7nq/giphy.gif" }
      }
    ]
  });
});

client.login(process.env.TOKEN);

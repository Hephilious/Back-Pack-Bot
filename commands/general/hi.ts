const { Channel } = require("eris");

module.exports = {
  name: "hi",
  description: "testing command",
  argsRequired: false,
  guildOnly: false,
  usage: "$hi",
  alias: [],
  run: async (client, message, args, Manager) => {
    if (message.channel instanceof Channel) {
      client.createMessage(message.channel.id, "hello");
    } else {
      console.log(message);
    }
  },
};

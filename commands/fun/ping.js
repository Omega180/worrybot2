const {SlashCommandBuilder} = require("discord.js")

module.export = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("replies with Pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!")
	},
}

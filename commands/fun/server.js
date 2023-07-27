const {SlashCommandBuilder} = require("discord.js")

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Provides information about the server"),
	async execute(interaction) {
		//interaction.build es el objeto que representa al servidor en el cual el comando fue corrido
		await interaction.reply(
			`this server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`
		)
	},
}

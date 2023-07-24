const {SlashCommandBuilder} = require("discord.js")

module.export = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Provides information about the user"),
	async execute(interaction) {
		// interaction.user es el objeto representando al usuario que corrio el comando
		// interaction.member es el objeto de GuildMember, el cual representa al usuario del guild especifico
		await interaction.reply(
			`este comando fue corrido por ${interaction.user.username}, el cual se unio al discord en ${interaction.member.joinedAt}`
		)
	},
}

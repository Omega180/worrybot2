const {SlashCommandBuilder} = require("discord.js")
const wait = require("node:timers/promises").setTimeout

const d6 = () => {
	return Math.floor(Math.random() * 6 + 1)
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName("throw-a-dice")
		.setDescription("Throws a D6"),
	async execute(interaction) {
		await interaction.deferReply()
		await wait(1000)
		await interaction.followUp(`THROWING A DICEEEEEE, THE RESULT IS: ${d6()}`)
	},
}

const {SlashCommandBuilder} = require("discord.js")
const wait = require("node:timers/promises").setTimeout
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("replies with Pong!!!"),
	async execute(interaction) {
		await interaction.reply("Pong!")
		/* Permite borrar la reply anterior */
		await wait(2000)
		/* Puedes agregarle el tag de ephemeral para hacer que solo lo vea el que envio el comando */
		/* await interaction.followUp({content: "Pong Again!", ephemeral: true}) */
		await interaction.followUp("Pong Again!")
		/* Si tira un error esto es por que esta tomando la reply */
		const message = await interaction.fetchReply()
		const command = await interaction
			.fetchReply()
			/* reply.content en este caso pasa el texto que fue como respuesta inicial al then */
			.then((reply) => console.log(`replied with ${reply.content}`))
			.catch(console.error)
		console.log(command)
	},
}

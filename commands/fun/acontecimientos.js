const {SlashCommandBuilder} = require("discord.js")
const wait = require("node:timers/promises").setTimeout
const listaAcontecimientos = [
	"El Kraken",
	"La laptop de Yoshi",
	"Miedo a la gravedad",
	"El Wacazo de Neme",
	"Drinking Sonos (incluyendo parte 2)",
	"Disco bonito",
	"El voice chat después de las 2 AM",
	"Pablo",
	"La explotación laboral de Howard Jones",
	"Pablo Expansion Pack 1: GFL ES y Tortuga arc",
]
const d6 = () => {
	return Math.floor(Math.random() * listaAcontecimientos.length)
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName("acontecimientos")
		.setDescription("Muestra un acontecimiento perturbador de poi al azar"),
	async execute(interaction) {
		await interaction.reply(`${listaAcontecimientos[d6()]}`)
	},
}

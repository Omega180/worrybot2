const {SlashCommandBuilder} = require("discord.js")
const wait = require("node:timers/promises").setTimeout
const axios = require("axios")
const {get} = require("node:http")
const d6 = () => {
	return Math.floor(Math.random() * 1000 + 1)
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("random-pokemon")
		.setDescription("Muestra un pokemon random"),
	async execute(interaction) {
		await interaction.deferReply()
		const obtenerPokemon = () => {
			const number = d6()
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
				.then((result) => {
					console.log(result.data.name)
					const randomPokemonName = result.data.name
					const randomPokemonSprite = result.data.sprites.front_default
					console.log(result.data)
					return interaction.followUp(
						`Your random pokemon is: ${randomPokemonName} ${randomPokemonSprite}`
					)
				})
		}
		await wait(1000)
		obtenerPokemon()
	},
}

const {SlashCommandBuilder} = require("discord.js")
//permite importar la funcion de espera
const wait = require("node:timers/promises").setTimeout
module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Provides information about the server"),
	//Interaction aca abajo representa el ChatInputCommandInteraction en la documentacion
	async execute(interaction) {
		//interaction.build es el objeto que representa al servidor en el cual el comando fue corrido
		// deferReply le permite al bot abrir una ventana de espera para realizar cualquier operacion que necesite durante 15 minutos
		await interaction.deferReply()
		await wait(2000)
		/* Otra manera de buscar usuario seria esta, se le pasa el usuario a buscar y se ejecuta la funcion, luego esta es pasada en el reply en si */
		const buscarUsuario = (usuarioABuscar) => {
			return interaction.guild.members.cache.find(
				(user) => user.id === usuarioABuscar
			)
		}

		await interaction.editReply({
			content: `Este server fue creado en la fecha: ${
				interaction.guild.createdAt
			} y tiene el nombre de ${
				interaction.guild.name
			}, asi como la cantidad de miembros de ${
				interaction.guild.memberCount
				//se puede utilizar interaction.guild.members.cache.find para encontrar usuarios
			}, y por ultimo, el owner es ${buscarUsuario(interaction.user.id)} `,
		})
	},
}

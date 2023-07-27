const {Events} = require("discord.js")

module.exports = {
	//Nombre del evento que sera llamado
	name: Events.ClientReady,
	//Propiedad que denomina si el codigo sera corrido solo una vez
	once: true,
	//Logica de codigo que sera ejecutada por el evento
	execute(client) {
		console.log(`ready! logged in as ${client.user.tag}`)
	},
}

// Clases necesarias de discord.js
const fs = require("node:fs")
const path = require("node:path")
const {Client, Collection, GatewayIntentBits} = require("discord.js")
const {token} = require("./config.json")

// Crear una nueva instancia del cliente

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.commands = new Collection()
client.cooldowns = new Collection()
const foldersPath = path.join(__dirname, "commands")
const commandFolders = fs.readdirSync(foldersPath)

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder)
	const commandFiles = fs
		.readdirSync(commandsPath)
		.filter((file) => file.endsWith(".js"))
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file)
		const command = require(filePath)
		// coloca un nuevo item en la coleccion con la llave del nombre del comando y el valor del modulo exportado
		if ("data" in command && "execute" in command) {
			client.commands.set(command.data.name, command)
		} else {
			console.log(
				`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`
			)
		}
	}
}
// crea una variable que almacena el camino de la carpeta
const eventsPath = path.join(__dirname, "events")

//ingresa al comino para leer los archivos dentro de la variable, filtra los archivos en base a el endsWith
const eventFiles = fs
	.readdirSync(eventsPath)
	.filter((file) => file.endsWith(".js"))

//Ciclo que lee todas los eventos en base a sus argumentos y la variable ya adquirida anteriormente

/* The Client class in discord.js extends the EventEmitter class. Therefore, the client object exposes the .on() and .once() methods that you can use to register event listeners. These methods take two arguments: the event name and a callback function. These are defined in your separate event files as name and execute. */

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file)
	const event = require(filePath)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args))
	} else {
		client.on(event.name, (...args) => event.execute(...args))
	}
}

// Entra al discord con el token del cliente

client.login(token)

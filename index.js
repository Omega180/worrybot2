// Clases necesarias de discord.js
const fs = require("node:fs")
const path = require("node:path")
const {Client, Collection, Events, GatewayIntentBits} = require("discord.js")
const {token} = require("./config.json")

// Crear una nueva instancia del cliente

const client = new Client({intents: [GatewayIntentBits.Guilds]})
client.commands = new Collection()

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith(".js"))

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)
        // coloca un nuevo item en la coleccion con la llave del nombre del comando y el valor del modulo exportado
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command)
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`)
        }
    }

// Cuando el cliente este listo, correr este codigo (solo una vez)
// Usamos 'c' como parametro del evento para mantenerlo separado del ya definido "client"

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Entra al discord con el token del cliente

client.login(token)

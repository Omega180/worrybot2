// Clases necesarias de discord.js

const {Client, Events, GatewayIntentBits} = require("discord.js")
const {token} = require("./config.json")

// Crear una nueva instancia del cliente

const client = new Client({intents: [GatewayIntentBits.Guilds]})

// Cuando el cliente este listo, correr este codigo (solo una vez)
// Usamos 'c' como parametro del evento para mantenerlo separado del ya definido "client"

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Entra al discord con el token del cliente

client.login(token)

// next.config.js
module.exports = {
	publicRuntimeConfig: { // Will be available on both server and client
		API: process.env.API,
	}
}
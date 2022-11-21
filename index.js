const express = require("express")
const app = express()

app.use(
	express.static("public", {
		extensions: "html",
	})
)

app.get("/", (req, res) => {
	res.send("Hello World!")
})

if (!process.env.DETA_RUNTIME) {
	app.listen(3000, () => console.log(`App 🚀 @ http://localhost:3000`))
}

module.exports = app

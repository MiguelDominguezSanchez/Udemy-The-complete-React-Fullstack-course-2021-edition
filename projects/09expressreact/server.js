const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

const mongoUri =
	'mongodb+srv://MiguelDominguez:MongoDBKennwort1#@cluster0.fvdya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/api/users', (req, res) => {
	res.json([
		{ id: 1, username: 'francis' },
		{ id: 2, username: 'steve' },
	])
})

// MongoClient.connect(mongoUri, { useUnifiedTopology: true }, (err, client) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('connected to the db')
// })

const port = process.env.PORT || 3001
app.listen(port)

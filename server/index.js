const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000

if (process.env.NODE_ENV === 'production') {
    console.log('Prod ...')

    app.use('/', express.static(__dirname))

    const indexPath = path.join(__dirname, 'index.html')

    app.get('*', (request, response) => {
        return response.sendFile(indexPath)
    })
} else {
    console.log('Dev ...')
}

async function start () {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

start()
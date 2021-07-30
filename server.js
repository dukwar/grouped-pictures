const express = require('express')
const app = express()


const PORT = process.env.PORT || 5000


function start(){
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
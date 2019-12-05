const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end(`
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Cats</a>
                    </li>
                    <li>
                        <a href="/dogs">Dogs</a>
                    </li>
                </ul>
            </nav>
            <h1>CAAAAAATS</h1>
        </div>
    `)
})
app.get('/dogs', (req, res) => {
    res.end(`
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Cats</a>
                    </li>
                    <li>
                        <a href="/dogs">Dogs</a>
                    </li>
                </ul>
            </nav>
            <h1>DOOOOOOGS</h1>
        </div>
    `)
})

app.listen(PORT, () => {
    console.log("Server is runnig")
})
const express = require('express')
const axios = require('axios').default
const app = express()
var cors = require('cors')

const port = 3001
app.use(cors())

app.get('/', async (req, res) => {
    let list = []
    let response = await axios.get('https://assignment.dwbt.tech/products')
    const { products } = response.data

    fetchImages = products.map((element) => {
        return axios.get(`https://assignment.dwbt.tech/images/${element.sku}`)
        .then((imageRes) => {
            /* list.push({
                'name': element.name,
                'price': element.price,
                'image': imageRes.data.images[element.sku][0].src
            }) */

            return {
                'name': element.name,
                'price': element.price,
                'image': imageRes.data.images[element.sku][0].src
            }
        })
    })
    
    Promise.all(fetchImages).then(result => res.send(result))
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/api/getList/:type', (req, res) => {
        var fruits = ['mango', 'peach', 'grapes', 'strawberry', 'orange'];
        var veg = ["Broccoli", "Lettuce", "Carrot", "Potato", "Cabbage"];
        var type = req.params.type.toLowerCase();
    
        if (type == 'fruits') {
            res.send(fruits);
        }
         else if (type == 'vegetables') {
            res.send(veg);
        } else {
            res.send(`Type ${type} not found`);
        }
    });
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
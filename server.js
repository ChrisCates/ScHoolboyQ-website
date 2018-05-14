let express = require('express');
let app = express();

app.use(express.static('./dist/website'));

app.get('*', (req, res) => {
 return res.sendFile(__dirname + "/dist/website/index.html");
})

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log("ScHoolboyQ.chriscates.ca running on PORT", PORT);
})

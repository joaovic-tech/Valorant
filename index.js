const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));
app.set('views', path.join(__dirname, '/views'));

app.get('/about', (req,res) => {
  res.render('about')
    res.json({
        name: 'João',
        email: 'joaovictorca2004@gmail.com',
        urls: {
            type: 'whatsapp',
            url: 'https://wa.me/+5548999227431'
        }        
    })
})

app.get('/', (req,res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log('Server do bolado lendário João rodando na porta: ' + PORT);
});
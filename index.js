const express = require('express')
const axios = require('axios');
const { response } = require('express');

const app = express()


app.set('view engine', 'ejs');
app.set('views', 'views');

var link = "https://quase.herokuapp.com/"

async function getUser() {
    try {
      const resposta = await axios.get(link);
        var dados = resposta.data
      app.use('/', (req, res) => {
        return res.render('index.ejs', {dados: dados})
    });
      console.log(dados);

    } catch (error) {
      console.error(error);
    }
  }
getUser()







app.listen(3232)
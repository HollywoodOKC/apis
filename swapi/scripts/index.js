const axios = require('axios');

const button = document.querySelector('#btn');

const buttonSaying = () => {
  axios.get('https://swapi.dev/api/').then(res => {
    for (let t = 0; t < res.length; t++) {
      axios.get(res).then(response => {
        const para = document.createElement("h2");
        para.innerText = `${response}`;
        document.body.appendChild(para);
      })
    }
  })
  console.log(`Button Clicked!`);
}

document.addEventListener("click", buttonSaying);

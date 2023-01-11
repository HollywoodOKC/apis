//const axios = require('axios');

const button = document.querySelector('#btn');

const buttonSaying = () => {
  axios.get('https://swapi.dev/api/people').then(res => {
    for (let t = 0; t < res.data.results.length; t++) {
      axios.get(res.data.results[t].url).then(response => {
        const para = document.createElement("h2");
        para.innerText = `${JSON.stringify(response.data, null, 2)}`;
        document.body.appendChild(para);
      })
    }
  })
  console.log(`Button Clicked!`);
}

button.addEventListener("click", buttonSaying);

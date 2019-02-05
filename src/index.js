import $ from 'jquery'

$(document).ready(() => {
  let break_down = document.getElementById('breakdown-button')
  break_down.addEventListener('click', breakDown, true)
})

document.addEventListener("DOMContentLoaded", getTopWord);


function breakDown(){
  let text = $('#text-input').val().split(" ")
  text.forEach(element =>{
    let body = { "word": { "value": element } }
    fetch(`https://wordwatch-api.herokuapp.com/api/v1/words/`, {
      method: 'POST',
      headers:{'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => {
    console.log('Success')
  })
  })

}

function getTopWord(){
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word/`, {
    method: 'GET',
    headers:{'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
  })
  .then((respone) => respone.json())
  .then((data) => {
    let topWord = Object.keys(data.word)[0];
    let wordCount = data.word[topWord];
    $('#top-word-display').append(topWord);
    $('#top-word-count-display').append(wordCount);
  })

}

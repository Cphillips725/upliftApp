document.addEventListener('DOMContentLoaded', () => {
  console.log('clicked the button');
    document.getElementById("QuoteBtn").onclick = myFunction;
   function myFunction(){
    const url = 'https://api.kanye.rest'
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
    document.getElementById("QuoteText").innerHTML = data.quote;
    })
   }
  })
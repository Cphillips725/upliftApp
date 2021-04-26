const QuoteBtn = document.getElementById('QuoteBtn');

const QuoteText = document.getElementById('QuoteText');

 

QuoteBtn.addEventListener('click', () => {

  console.log('clicked the button');

  const url = 'https://api.kanye.rest'
  
  

  fetch(url) 

  .then((res) => {

      return res.json();

  })

.then((data) => {

    console.log(data)

    QuoteText.innerHTML = data.quote

    Quotekanye.innerHTML = data.author

  })

});

 


// get filter element
const filterElement = document.querySelector('header input')

// get cards elements
const cards = document.querySelectorAll('.cards li')

// add input event for the filter element
filterElement.addEventListener('input', filtrarElementos)

// filter function
function filtrarElementos(){
  
  // if the filter is not empty
  if(filterElement.value != ""){
    // for each card of cards
    for(let card of cards){
      // get card heading (title)
      let cardTitle = card.querySelector ('h2')
       // tranform to lower case
      cardTitle = cardTitle.textContent.toLowerCase()
      // transform filter text to lower case
      let filterElementText = filterElement.value.toLowerCase()
      // if card title does not include the filter text
      if(!cardTitle.includes(filterElementText)){
        // hide the card element
        card.style.display = "none"
      }else{
        card.style.display = "block"
      }
    }
  }else{
    for(let card of cards){
      card.style.display = "block"
    }
  }
     
     
      
        
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element
}
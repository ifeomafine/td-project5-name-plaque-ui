//  text-value is for the box
// character is for the name plaque
var characterTag = document.getElementById('character');
// amount is for the price
let amountTag = document.getElementById('amount');
const textValue = document.getElementById('text-value');





// amountTag.textContent = count;

textValue.addEventListener('input' , dunno);

function dunno(e) {
  // console.log (e.target.value);
  document.getElementById('character').textContent = e.target.value;
  let writeUp = characterTag.textContent.replaceAll(' ' , '');
  let total = writeUp.length * 5 ;
  amountTag.innerText ="$" + total;
  
  
}

// console.log(characterTag)
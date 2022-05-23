
// character is for the name plaque
let characterTag = document.getElementById('character');
// amount is for the price
let amountTag = document.getElementById('amount');
//  text-value is for the input Box
const textValue = document.getElementById('text-value');


textValue.addEventListener('input' , dunno);

function dunno(e) {
  characterTag.textContent = e.target.value;
  
  // This section is for the amount side calculation
  let writeUp = characterTag.textContent.replaceAll(' ' , '');
  let total = writeUp.length * 5 ;
  amountTag.innerText ="$" + total;
  
}

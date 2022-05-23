const button = document.querySelector(".btn")
let content = document. querySelector(".text-area")
let message = document.querySelector(".message")
let message2 = document.querySelector(".message2")
let character = document.getElementById("character")
let input = character.value


button.addEventListener("click", buynow)

function buynow() {
    // console.log(input.value)
    if (input.length === 0){
        message.innerText = "Please enter a Unique Name"
    }
    else {
        message.innerText = "Nice One!!!"
    }
}
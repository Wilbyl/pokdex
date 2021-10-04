const closeMessenger = document.querySelector("#close");
const message = document.querySelector("message");

closeMessenger.aggEventlistener = ("click", function(){
    message.style.display = "none"
});
setTimeout(() => {
    message.style.display = "none"
}, 5000);
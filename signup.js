const container = document.querySelector(".container") ; 
const btnSignUp = document.querySelector("#btnSignUp") ;
const btnLogIn = document.querySelector("#btnLogIn") ;
btnLogIn.addEventListener("click", () => {
    container.classList.remove("signup");
});
console.log(container) ; 
btnSignUp.addEventListener("click", () => {
    container.classList.add("signup") ;
});
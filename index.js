const nameForm = document.querySelector("#name-form")
const welcomeConteiner = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")
function checkUser(){
    const userName = localStorage.getItem("name")
    const userSenha = localStorage.getItem("Senha")
    if(userName || userSenha){
        nameForm.style.display = "none"
        welcomeConteiner.style.display="block"
        const userNameElement = document.querySelector("#username")
        const userPasswordElement = document.getElementById("#password")
        userNameElement.textContent = userName;
        userPasswordElement.textContent = userSenha;
    }else{
        nameForm.style.display = "block";
        welcomeConteiner.style.display="none"
    }
}
nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.querySelector("#name")
    const PasswordInput = document.querySelector("#Senha")
    localStorage.setItem("name",nameInput.value,"senha",PasswordInput.value)
    nameInput.value = "";
    checkUser()
});
logoutBtn.addEventListener('click',() =>{
    localStorage.removeItem("name")
    checkUser()
})
checkUser();
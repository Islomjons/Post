let elForm = document.querySelector(".form");
let elInputEmail = document.querySelector(".input__email");
let elInputPassWord = document.querySelector(".input__password");
let elRegisterBtn = document.querySelector(".back__btn");

let logIn = "Islom__2oo2";
let passWord = "Islomjon200220022002";

elForm.addEventListener("click", function(event) {
    event.preventDefault();

    let inputEmail = elInputEmail.value.trim();
    let inputPassWord = elInputPassWord.value.trim();

    fetch("https://fast-ravine-16741.herokuapp.com/api/auth", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
            {
                "email": inputEmail,
                "password": inputPassWord,
            }
        )
    })
    .then(response => response.json())
    .then(data => {

        if(!data.error){
            localStorage.setItem("tooken", data.Authorization)
            console.log(data.Authorization);
            elInputEmail.value = null;
            elInputPassWord.value = null;
            window.location.href = "/index.html"
        }
    })
})

elRegisterBtn.addEventListener("click", function() {
    window.location.href = "/register.html"
})
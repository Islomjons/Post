let elForm = document.querySelector(".form");
let elInputEmail = document.querySelector(".user__email");
let elInputPassWord = document.querySelector(".user__password");
let elInputName = document.querySelector(".user__name");
let elInputCheckbox = document.querySelector(".user__checkbox");
let elInputBtn = document.querySelector(".user__btn");

elForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let inputEmail = elInputEmail.value.trim();
    let inputPassWord = elInputPassWord.value.trim();
    let inputName = elInputName.value.trim();
    let inputCheckbox = elInputCheckbox.value
    
    fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(
        {
            "email":inputEmail,
            "password":inputPassWord,
            "name":inputName,
            "isAdmin":true
        }
        )
    })
    .then(response => response.json())
    .then(data => {
        
        if(!data.error){
            window.location.href = "./login.html"
            elInputEmail.value = null;
            elInputPassWord.value = null;
        }else{
            alert(data.error)
        }
    })
})


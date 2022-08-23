let elWrapper = document.querySelector(".wrapper");
let elLogBtn = document.querySelector(".log__btn")
let elTableTemp = document.querySelector("#table__temp").content;


let authtake = localStorage.getItem("tooken");

fetch("https://fast-ravine-16741.herokuapp.com/api/posts", {
method: 'GET',
headers: {
    "Content-Type":"application/json",
    "Authorization": authtake
}})
.then(response => response.json())
.then(data => {
    renderUsers(data.posts)
    
    if(!data.error){
        console.log("True")
    }else{
        window.location.href = "/login.html"
    }
})


function renderUsers(array) {
    elWrapper.innerHTML = null;
    let newFragment = document.createDocumentFragment();
    
    for (const item of array) {
        let tableTemp = elTableTemp.cloneNode(true)
        
        tableTemp.querySelector(".user__title").textContent = item.title;
        tableTemp.querySelector(".user__body").textContent = item.body;
        tableTemp.querySelector(".user__id").textContent = item._id;
        tableTemp.querySelector(".user__btn").dataset.deleteId = item._id
        tableTemp.querySelector(".user__btn").classList.add(`del${item._id}`)
        
        newFragment.appendChild(tableTemp)
    }
    elWrapper.appendChild(newFragment)
}

elLogBtn.addEventListener("click", function() {
    window.location.href = "/login.html"
})

elWrapper.addEventListener("click", function(event) {
    let datasetedId = event.target.dataset.deleteId;

    if (datasetedId) {
        let currentBtn = document.querySelector(`.del${datasetedId}`)

        let delItem = currentBtn.closest(".tRow")

        delItem.remove()
    }
})
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value == ''){
        alert("You Have to write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(li)
    }

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
})

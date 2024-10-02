const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function add() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item (li)
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        
        // Add the list item to the list container
        listContainer.appendChild(li);
        
        // Create a span element (for a close/delete button)
        let span = document.createElement("span");
        span.textContent = "\u00d7"; // '×' symbol
        span.className = "close";
        
        // Append the span to the list item
        li.appendChild(span);
    }
    
    // Clear the input box
    inputBox.value = '';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
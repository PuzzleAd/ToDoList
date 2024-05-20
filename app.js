const input = document.getElementById("input");
const plusButton = document.getElementById("plus-container");
const taskCounter = document.getElementById("task-counter");
const idBox = document.getElementById("id-box");
 
let taskQuantity = 0;

taskCounter.textContent = `Tasks to do - 0`;


plusButton.addEventListener("click", function () {
    let inputValue = input.value.trim();


    if(inputValue !== "") {
        taskQuantity++;
        let taskBox = document.createElement("div");
        taskBox.classList.add("list-component");
        idBox.appendChild(taskBox);

        let taskText = document.createElement("p");
        taskText.textContent = inputValue;
        taskText.classList.add("taskText");
        taskBox.appendChild(taskText);

        let iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");
        taskBox.appendChild(iconContainer);

        let checkImage = document.createElement("img");
        checkImage.src = "checker.svg";
        iconContainer.appendChild(checkImage);
        checkImage.style.fill = "green"
        checkImage.style.cursor = "pointer";

        let trashImage = document.createElement("img");
        trashImage.src = "trash.svg";
        iconContainer.appendChild(trashImage);
        trashImage.style.cursor = "pointer";


    }

    taskCounter.textContent = `Tasks to do - ${taskQuantity}`;
    
})

console.log(taskQuantity);


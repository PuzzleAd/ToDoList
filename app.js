const input = document.getElementById("input");
const plusButton = document.getElementById("plus-container");
const taskCounter = document.getElementById("task-counter");
const idBox = document.getElementById("id-box");
 

taskCounter.textContent = `Tasks to do - 0`;


let taskQuantity = 0;


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
        checkImage.classList.add("active");
        checkImage.style.cursor = "pointer";

        let trashImage = document.createElement("img");
        trashImage.src = "trash.svg";
        iconContainer.appendChild(trashImage);
        trashImage.style.cursor = "pointer";


        trashImage.addEventListener("click", function () {
            idBox.removeChild(taskBox);
            taskQuantity -= 1;
            taskCounter.textContent = `Tasks to do - ${taskQuantity}`;

        })

        checkImage.addEventListener("click", function () {
            if(checkImage.classList.contains("active")) {
                checkImage.src = "checker-green.svg";
                checkImage.classList.remove("active");
                taskText.classList.remove("taskText");
                taskText.classList.add("taskTextGreen")
                taskQuantity -= 1;
                taskCounter.textContent = `Tasks to do - ${taskQuantity}`;

            }else {
                checkImage.src = "checker.svg";
                checkImage.classList.add("active");
                taskText.classList.remove("taskTextGreen");
                taskText.classList.add("taskText");
                taskQuantity 
                += 1;
            taskCounter.textContent = `Tasks to do - ${taskQuantity}`;
            }
            
        })

        taskCounter.textContent = `Tasks to do - ${taskQuantity}`;


        console.log(taskQuantity);

    }


    input.value = "";
    
})





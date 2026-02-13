
const formSection = document.getElementById("tache"); // باش نخبيو الفورم
const taskForm = document.getElementById("taskForm");
const tachfiled = document.getElementById("tache-field");
const placedetache = document.getElementById("placedetache");
const close = document.getElementById('closeForm');

taskForm.addEventListener("submit", function(e){
    e.preventDefault();

    const text = tachfiled.value.trim();

    if(text === "") return;
    


    // Create task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("flex", "items-center", "justify-between", "bg-green-100","p-2","rounded-xl","mt-[50px]","w-[350px]", "mr-[200px]" ,"h-[70px]");

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = text;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<img src="suppression.png" alt="delete" class="w-6 h-6">';
    deleteBtn.classList.add("ml-2", "text-red-500", "hover:text-red-700", "font-bold", "text-xl");
    deleteBtn.title = "Supprimer";
    deleteBtn.addEventListener("click", function() {
        placedetache.removeChild(taskContainer);
    });

    // Append text and button to container
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteBtn);
    placedetache.appendChild(taskContainer);

    formSection.classList.add("hidden");
    tachfiled.value = "";
});

close.addEventListener("click", function(){
    formSection.classList.add("hidden");
});


const formSection = document.getElementById("tache"); // باش نخبيو الفورم
const taskForm = document.getElementById("taskForm");
const tachfiled = document.getElementById("tache-field");
const placedetache = document.getElementById("placedetache");

taskForm.addEventListener("submit", function(e){
    e.preventDefault();

    const text = tachfiled.value.trim();

    if(text === "") return;
    

    const task = document.createElement("p");
    task.textContent = text;
    task.classList.add("bg-green-100","p-2","rounded-xl","mt-[50px]","w-[350px]", "mr-[200px]" ,"h-[70px]");

    placedetache.appendChild(task);

    formSection.classList.add("hidden");
    tachfiled.value = "";
});

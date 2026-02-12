
const openBtn = document.getElementById("openForm");  // button dyal add
const closeBtn = document.getElementById("closeForm"); // button dyal close
const form = document.getElementById("tache");        // section dyal form
 
// klik 3la add button
// openBtn.addEventListener("click", () => {
//     form.classList.remove("hidden");  // yban form
//     main.classList.add("blur-sm");    // blur l main
// });

// klik 3la close button
closeBtn.addEventListener("click", () => {
    console.log('btn clicked !')
    form.classList.add("hidden");     // tsed form
});
const placedetache = document.getElementById("placedetache");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const text = tachfiled.value;

    const task = document.createElement("p");
    task.textContent = text;

    tasksContainer.appendChild(task);

    form.classList.add("hidden"); // تخبي الفورم
    tachfiled.value = ""; // تصفر input
});




const tachfiled = document.querySelector("#tache-field") ;

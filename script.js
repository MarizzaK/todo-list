const todos = [];
/* "const todos" är en variabel som fått ett värde "todos" som inte kan ändras under promgramkörningen då den är konstant.
    Variablen har blivit tilldelad en tom lista, []. Denna lista som kan sedan lagra data som användare skriver in. */

const inputBox = document.getElementById("input-box");
/* I HTML har input fått id "input-box". Detta för att kunna hämta elementet till javascript.
   Alltså för att kunna ge den egenskaper med javascript. 
   Den konstanta variablen = hämtar det element objekt som representerar det element som har de id som matchar den specifika stringen. */
const listContainer = document.getElementById("list-container");
/* -||- hämtar listan som fått id; "list-container"*/
//---------------------------------------------------------------------------------------------------------------------------------------//

function addTask() {
  const taskText = inputBox.value.trim();
  /* function definition-> addTask, vart egenskaperna önskas anropas till ->InputBox = id från input element i HTML.
   value är den text som skrivs in i rutan, input rutan. trim gör att ledande och efteföljande mellanslag tas bort från input. */
  if (taskText === "") {
    alert("You must write something!");
    /* if= Om skrivaren inte fyller rutan med text och klickar på add kommer det komme en notis som säger "You must write something! */
  } else {
    const newTask = {
      text: taskText,
      completed: false,
    };
    todos.push(newTask);
    displayTasks();
  }
  inputBox.value = "";
}
/* else= om annat, alltså användren add text till listan. newTask är uppdelad i två; text, då skrivaren har skrivit text
   och completed, om något annat orsakat. 
   todos.push(newTask) adderar nytt objekt/tasks till todos listan, variabel som kan hålla mer än ett värde.
   displayTasks gör att allt uppdateras och visas på skärmen, displayen.
   inputBox.value har en tom tring -> = ""; detta gör att efter ny task har adderats så blir inputytan/boxen tom igen för att skrivas i igen på nytt. */
//---------------------------------------------------------------------------------------------------------------------------------------//

function displayTasks() {
  listContainer.innerHTML = "";
  /* displayTasks gör att listan kommer att visas på skärmen. 
     listContainer för den till de matchande id och kommer visa vart på skärmen den kommer att visas. */

  todos.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    /* todos.forEach gör att en loop lopar(upprepar sig) genom listan genom varje objekt(forEach). 
       Efter varje gång task skapas(document.createElement) en ny li (const li)*/

    if (task.completed) {
      li.classList.add("checked");
    }
    /* if=om en todo/task blir avklarad (om task.completed är true) så kan användaren klicka på cirkeln i listan och cirkeln övergår från om till att få en bock.
   checked är då det class name som img har fått i CSS som adderas till li elementet. */
    //---------------------------------------------------------------------------------------------------------------------------------------//

    const removeButton = document.createElement("span");
    /* removeButon= kunna ta bort to- dos i listan.     skapar ny span element */
    removeButton.textContent = "×";
    /* Detta ger användaren en plats att klicka för att tta bort tasks/ to-dos. -> X */
    removeButton.onclick = () => removeTask(index);
    /* När användaren klickar på knappen, add, kommer den anropa removeTask funktionen som är associerad med ta bort knappen.
    De to-dos som önsksas raderas tas bort från listan.*/

    li.appendChild(removeButton);
    /* gör att ett X, ta bort knapp, hamnar brevid varje to-do */

    li.addEventListener("click", () => toggleTask(index));
    /* När användaren klickar på knappen kommer den anropa toffleTask funktionen. */
    listContainer.appendChild(li);
  });
}
/* Denna kod gör att varje li läggs till i lisstContainer,Listan som syns på skärmen. */
//---------------------------------------------------------------------------------------------------------------------------------------//

function toggleTask(index) {
  todos[index].completed = !todos[index].completed;
  displayTasks();
}
/* Vad som händer i en toggleTaask funktion är att den växlar/togglar något attribut eller tillstånd.
    detta fall växlar den mellan en ickeavklarad till avklarad, tom cirkel till cirkel med bock eller vice versa.
    index är då numret på elementet i listan.*/
function removeTask(index) {
  todos.splice(index, 1);
  /* Visar vilket index/nummer på listan som skall tas bort och eller läggas till.
     splice () metoden används. Den skriver över den ursprungliga listan. */
  displayTasks();
  /*uppdaterar*/
}
/* */
displayTasks();
/* Sätts i slutet av koden för att säkrsa att koden visas. Den ansvarar att en uppdaterad version visas på skärmen
   efter varje interaktion. */

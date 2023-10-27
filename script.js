const todos = [];
/*"const todos" är en variabel som fått ett värde "todos" som inte kan ändras under promgramkörningen då den är konstant.
Variablen har blivit tilldelad en tom lista, []. Denna lista som kan sedan lagra data som användare skriver in.*/

const inputBox = document.getElementById("input-box");
/*I HTML har input fått id "input-box". Detta för att kunna hämta elementet till javascript.
Alltså för att kunna ge den egenskaper med javascript. 
Den konstanta variablen = hämtar det element objekt som representerar det element som har de id som matchar den specifika stringen.*/
const listContainer = document.getElementById("list-container");
/* -||- hämtar listan som fått id; "list-container"*/
function addTask() {
  const taskText = inputBox.value.trim();
  /*function definition-> addTask, vart egenskaperna önskas anropas till ->InputBox = id från input element i HTML.
value är den text som skrivs in i rutan, input rutan. trim gör att ledande och efteföljande mellanslag tas bort från input.  */
  if (taskText === "") {
    alert("You must write something!");
    /*Om skrivaren inte fyller rutan med text och klickar på add kommer det komme en notis som säger "You must write something!*/
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
/**/

function displayTasks() {
  listContainer.innerHTML = "";

  todos.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("checked");
    }

    const removeButton = document.createElement("span");
    removeButton.textContent = "×";
    removeButton.onclick = () => removeTask(index);

    li.appendChild(removeButton);

    li.addEventListener("click", () => toggleTask(index));

    listContainer.appendChild(li);
  });
}

function toggleTask(index) {
  todos[index].completed = !todos[index].completed;
  displayTasks();
}

function removeTask(index) {
  todos.splice(index, 1);
  displayTasks();
}

displayTasks();

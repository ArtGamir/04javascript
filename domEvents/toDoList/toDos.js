let todos = [
    {
      title: "Completar tarea 1",
      dueDate: "2023-11-10",
      completed: false,
    },
    {
      title: "Ir de compras",
      dueDate: "2023-11-15",
      completed: true,
    },
    {
      title: "Estudiar para el examen",
      dueDate: "2023-11-20",
      completed: false,
    },
    {
      title: "Hacer ejercicio",
      dueDate: "2023-11-25",
      completed: true,
    },
    {
      title: "Llamar a mamá",
      dueDate: "2023-11-30",
      completed: false,
    },
    {
      title: "Terminar proyecto",
      dueDate: "2023-12-05",
      completed: false,
    },
    {
      title: "Limpiar la casa",
      dueDate: "2023-12-10",
      completed: true,
    },
    {
      title: "Preparar la cena",
      dueDate: "2023-12-15",
      completed: false,
    },
    {
      title: "Leer un libro",
      dueDate: "2023-12-20",
      completed: false,
    },
    {
      title: "Hacer una caminata",
      dueDate: "2023-12-25",
      completed: true,
    },
  ];

const PrintAllTasks = () => {
  let taskWraper = document.getElementById("listContainer")
  todos.forEach((task) =>{
  
  //item  
    let taskLi = document.createElement("li")
    taskLi.classList.add("border", task.completed ? "border-success" : "border-danger")
    taskLi.classList.add ("list-group-item")
      
  //title
    let taskLabel = document.createElement("p")
    taskLabel.classList.add("form-check-label")
    taskLabel.setAttribute("for", "firstCheckbox")
    taskLabel.innerText = `${task.title} Vence: ${task.dueDate}`

  //checkbox
    let taskInput = document.createElement("input")
    taskInput.classList.add("form-check-input","me-1")
    taskInput.setAttribute ("type","checkbox")
    taskInput.setAttribute ("value","boolean")
    taskInput.setAttribute("id","flexCheckDefault")
    taskInput.checked = task.completed
  
  //append 
    taskLi.append(taskInput, taskLabel)
    taskWraper.append(taskLi)
})
}

PrintAllTasks()




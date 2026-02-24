// Selection of Column

let todo = document.querySelector("#todo")
let inprogress = document.querySelector("#inprogress")
let done = document.querySelector("#done")

let modalActive = document.querySelector(".create-task-modal")

// modal logic.....

let activeModal = document.querySelector(".add-btn")
let closeModalBtn = document.querySelector("#close-btn")

activeModal.addEventListener("click", () => {
    modalActive.classList.add("create-task-modal-active")
})

closeModalBtn.addEventListener("click", () => {
    modalActive.classList.remove("create-task-modal-active")
})

// modal logic - Add Task

let addTaskbtn = document.querySelector("#add-task-btn")

let input = document.querySelector("input")
let discription = document.querySelector("textarea")

addTaskbtn.addEventListener("click", () => {

    //Create Task Div logic

    let div = document.createElement("div")
    div.setAttribute("draggable", "true")
    div.classList.add("task")

    let h2 = document.createElement("h2")
    h2.textContent = input.value

    let p = document.createElement("p")
    p.textContent = discription.value

    let divDeleteBtn = document.createElement("div")
    divDeleteBtn.classList.add("delete")

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = 'Delete'
    deleteBtn.classList.add("delete-btn")

    // append Childs in Task

    todo.append(div)
    div.append(h2)
    div.append(p)
    div.append(divDeleteBtn)
    divDeleteBtn.append(deleteBtn)

    modalActive.classList.remove("create-task-modal-active")
})



// DragElement Logic

let taskDiv = document.querySelector(".task")

let dragelement = null;

taskDiv.forEach((task) => {
    task.addEventListener("drag",(task)=>{
        dragelement = task

    })
});







function AddDragElementsInColoums(task) {



}











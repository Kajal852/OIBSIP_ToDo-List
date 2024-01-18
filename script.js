window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const taskInput = document.querySelector("#task-input");
    const taskContainer = document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        if (taskInput.value === '') {
            alert("First write something!!");
        } else {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const contentDiv = document.createElement("div");
            contentDiv.classList.add("content");

            taskDiv.appendChild(contentDiv);

            const task_input= document.createElement("input");
            task_input.classList.add("text");
            task_input.type = "text";
            task_input.value= taskInput.value;
            task_input.setAttribute("readonly", "readonly");

            contentDiv.appendChild(task_input);

            const actionDiv = document.createElement("div");
            actionDiv.classList.add("actions");

            const editEl = document.createElement("button");
            editEl.classList.add("edit");
            editEl.innerHTML = "Edit";

            const completeEl = document.createElement("button");
            completeEl.classList.add("complete");
            completeEl.innerHTML = "Completed";

            const deleteEl = document.createElement("button");
            deleteEl.classList.add("delete");
            deleteEl.innerHTML = "Delete";

            actionDiv.appendChild(editEl);
            actionDiv.appendChild(completeEl);
            actionDiv.appendChild(deleteEl);

            taskDiv.appendChild(actionDiv);

            taskContainer.appendChild(taskDiv);

            editEl.addEventListener('click', ()=>{            
                if (editEl.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    editEl.innerText = "Save";
                    task_input.style.textDecoration = "none";
                } else {
                    task_input.setAttribute("readonly", "readonly");
                    editEl.innerText = "Edit";
                }
            });
    
            deleteEl.addEventListener('click', ()=>{
                if (confirm("Are you sure you want to delete this task?")) {
                    taskContainer.removeChild(taskDiv);
                }
            });
            
            completeEl.addEventListener('click', ()=>{
                task_input.style.textDecoration = "line-through";
                task_input.setAttribute("readonly", "readonly");
            });
        }        
        taskInput.value = '';
    });
    
});

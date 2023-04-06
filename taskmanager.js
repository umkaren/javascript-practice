let taskManager = (function() {
    let tasks = [];

    function addTask(task) {
      tasks.push(task);
    }

    function displayTasks() {
      console.log(tasks);
    }

    return {
      addTask: addTask,
      displayTasks: displayTasks
    };

    
  })();

  taskManager.addTask("Refill gas tank.");
  taskManager.addTask("Do accounting homework tonight.");
  taskManager.addTask("Cry before going to sleep.");

  taskManager.displayTasks();
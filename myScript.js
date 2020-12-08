function getHelp() {
  
  var checkBox = document.getElementById("myCheck");
 
  var text = document.getElementById("text");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


function changeColor(color) { 
  document.body.style.background = color; 
} 
              
function gfg_Run() { 
  changeColor('palegreen'); 
                 
}   

function cleanRoom() {
  var checkBoxClean = document.getElementById("myCheckClean");
  var clean = document.getElementById("clean");
  if (checkBoxClean.checked == true){
    clean.style.display = "block";
  } else {
     clean.style.display = "none";
  }
}

function singleTask() {
  var checkBoxTask = document.getElementById("myCheckTask");
  var task = document.getElementById("task");
  if (checkBoxTask.checked == true){
    task.style.display = "block";
  } else {
     task.style.display = "none";
  }
}

function usePlanner() {
  var checkBoxPlanner = document.getElementById("myCheckPlanner");
  var planner = document.getElementById("planner");
  if (checkBoxPlanner.checked == true){
    planner.style.display = "block";
  } else {
     planner.style.display = "none";
  }
}
      
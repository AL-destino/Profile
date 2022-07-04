//Guessing
function processClick() {      
    var fr = document.getElementById("input1");
    var esp = document.getElementById("input2");
    var ko = document.getElementById("input3");
    var jpn = document.getElementById("input4");

  if(ko.checked == true){                      
    var output = document.getElementById("result");
    output.innerHTML = "Correct Answer!!! I love the Mamba the most!!! 🏀🏀🏀";
    }
  else if(fr.checked == true || esp.checked == true || jpn.checked == true){
    var output = document.getElementById("result");
    output.innerHTML = "He is great but I like Kobe the most~";
    }
    }
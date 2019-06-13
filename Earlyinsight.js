var scenes =
    [
        {
            time: "0.00", 
            description: "Break-Up",
            actors: ["Susan", "Jem"],
            actions: ["sighing", "leaving", "breaking up", "screaming", "door slam"],
            objects: ["door"],
            screenshot: "../PrimeVideo/Screenshots/scene1.png",
            video: "scene1.html"
        },

        {
            time: "0.57",
            description: "Meeting",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["meeting", "laughing", "talking"],
            objects: ["drink", "smoothie", "laptop", "table", "chair"],
            screenshot: "../PrimeVideo/Screenshots/scene2.png",
            video: "scene2.html"
        },

        {
            time: "2.41",
            description: "Date",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["talking", "drinking", "laughing", "hugging"],
            objects: ["drink"],
            screenshot: "../PrimeVideo/Screenshots/scene3.png",
            video: "scene3.html"
        },

        {
            time: "3.23",
            description: "Proposal",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["proposing", "marrying", "crying", "hugging"],
            objects: ["ring"],
            screenshot: "../PrimeVideo/Screenshots/scene4.png",
            video: "scene4.html"
        },

        {
            time: "3.51",
            description: "Murder",
            actors: ["Meghan", "Susan", "Celina", "Jem"],
            actions: ["laughing", "talking", "killing", "murdering", "screaming", "crying"],
            objects: ["knife", "blood"],
            screenshot: "../PrimeVideo/Screenshots/scene5.png",
            video: "scene5.html"
        }
        
    ];


var input = document.getElementById('submit');
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("searchButton").click();
  }
});


function searchScenes() {
  
  // Declare variables
  var input = document.getElementById('submit').value.toLowerCase();
 
  var finalScenes = [];
  //alert(input.value);
  // Loop through all objects, and add scenes that match the search query to finalScenes
  for (i = 0; i < scenes.length; i++) {
    
    for (j = 0; j < scenes[i].actors.length; j++) {
      
      if (input.includes(scenes[i].actors[j].toLowerCase())) {
        finalScenes.push(scenes[i]);
      }
    }
    for (j = 0; j < scenes[i].actions.length; j++) {
      if (input.includes(scenes[i].actions[j].toLowerCase())) {
        finalScenes.push(scenes[i]);
      }
    }
    for (j = 0; j < scenes[i].objects.length; j++) {
      if (input.includes(scenes[i].objects[j].toLowerCase())) {
        finalScenes.push(scenes[i]);
      }
    }
  }



/*
  window.onload=searchScenes() {
    var elem = document.createElement("img");
    elem.src = '../PrimeVideo/Screenshots/scene3.png';
    elem.setAttribute("height", "768");
    elem.setAttribute("width", "1024");
    elem.setAttribute("alt", "Scene3");
    document.getElementById("finalScenesLayout").appendChild(elem);
  }
*/


  for (i = 0; i < finalScenes.length; i++) {
    
    //document.write("<figure><img class='sceneImage' src=" + finalScenes[i].screenshot + "><figcaption class='sceneDescription'>"+finalScenes[i].description+"</figcaption></figure>");
    //document.write("<img class=sceneImage src=" + finalScenes[i].screenshot + "><span class=sceneDescription>"+finalScenes[i].description+"</span>");
    

    document.write("<a href=" + finalScenes[i].video + ">");
    document.write("<img class='sceneImage' height=30% width=30% src=" + finalScenes[i].screenshot + ">");
    document.writeln("<span class='sceneDescription'><font face='Verdana, Arial, Helvetica, sans-serif'><b>" + finalScenes[i].description + "</b></font></span>");
    document.write("</a>");


    /*var imgdescription = document.createTextNode("descr");

    image.src = finalScenes[i].screenshot;
    imgdescription.innerHTML = finalScenes[i].description;

    document.getElementById("finalScenesLayout").appendChild(image);
    document.getElementById("finalScenesLayout").appendChild(imgdescription);
    */
  }
 
}




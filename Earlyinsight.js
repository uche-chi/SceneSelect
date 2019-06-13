var scenes =
    [
        {
            time: "0.00", 
            description: "Break-Up",
            actors: ["Susan", "Jem"],
            actions: ["sighing", "leaving", "breaking up", "screaming", "door slam"],
            objects: ["door"],
            screenshot: "../PrimeVideo/Screenshots/scene1.png"
        },

        {
            time: "0.57",
            description: "Meeting",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["meeting", "laughing", "talking"],
            objects: ["drink", "smoothie", "laptop", "table", "chair"],
            screenshot: "../PrimeVideo/Screenshots/scene2.png"
        },

        {
            time: "2.41",
            description: "Date",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["talking", "drinking", "laughing", "hugging"],
            objects: ["drink"],
            screenshot: "../PrimeVideo/Screenshots/scene3.png"
        },

        {
            time: "3.23",
            description: "Proposal",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["proposing", "marrying", "crying", "hugging"],
            objects: ["ring"],
            screenshot: "../PrimeVideo/Screenshots/scene4.png"
        },

        {
            time: "3.51",
            description: "Murder",
            actors: ["Meghan", "Susan", "Celina", "Jem"],
            actions: ["laughing", "talking", "killing", "murdering", "screaming", "crying"],
            objects: ["knife", "blood"],
            screenshot: "../PrimeVideo/Screenshots/scene5.png"
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


  for (i = 0; i < finalScenes.length; i++) {
    
    //document.write("<figure><img class='sceneImage' src=" + finalScenes[i].screenshot + "><figcaption class='sceneDescription'>"+finalScenes[i].description+"</figcaption></figure>");
    //document.write("<img class=sceneImage src=" + finalScenes[i].screenshot + "><span class=sceneDescription>"+finalScenes[i].description+"</span>");
    document.write("<img class='sceneImage' src=" + finalScenes[i].screenshot + ">");
    document.writeln("<span class='sceneDescription'>" + finalScenes[i].description + "</span>");
    
  }
 
}
    

/*      
function loadVideo1() {
 var videoEl = document.getElementsByTagName('video')[0];
 var sourceEl = videoEl.getElementsByTagName('source')[0];
 sourceEl.src = 'AmazonEarlyInsights.mp4';
 videoEl.load();
}

      
function loadVideo2() {
 var videoE2 = document.getElementsByTagName('video')[0];
 var sourceE2 = videoE2.getElementsByTagName('source')[0];
 sourceE2.src = 'AmazonEarlyInsights.mp4';
 videoE2.load();
}


      
function loadVideo3() {
 var videoE3 = document.getElementsByTagName('video')[0];
 var sourceE3 = videoE3.getElementsByTagName('source')[0];
 sourceE3.src = 'AmazonEarlyInsights.mp4';
 videoE3.load();
}
      

      
function loadVideo4() {
 var videoE4 = document.getElementsByTagName('video')[0];
 var sourceE4 = videoE4.getElementsByTagName('source')[0];
 sourceE4.src = 'AmazonEarlyInsights.mp4';
 videoE4.load();
}
      

      
function loadVideo5() {
 var videoE5 = document.getElementsByTagName('video')[0];
 var sourceE5 = videoE5.getElementsByTagName('source')[0];
 sourceE5.src = 'AmazonEarlyInsights.mp4';
 videoE5.load();
}
*/




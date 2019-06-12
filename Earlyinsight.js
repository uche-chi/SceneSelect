var scenes =
    [
        {
            time: "0.00", 
            description: "break-up",
            actors: ["susan", "Jem"],
            actions: ["sighing", "leaving", "breaking up", "screaming", "door slam"],
            objects: ["door"],
            screenshot: "../PrimeVideo/Screenshots/scene1.png"
        },

        {
            time: "0.57",
            description: "meeting",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["meeting", "laughing", "talking"],
            objects: ["drink", "smoothie", "laptop", "table", "chair"],
            screenshot: "../PrimeVideo/Screenshots/scene2.png"
        },

        {
            time: "2.41",
            description: "date",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["talking", "drinking", "laughing", "hugging"],
            objects: ["drink"],
            screenshot: "../PrimeVideo/Screenshots/scene3.png"
        },

        {
            time: "3.23",
            description: "proposal",
            actors: ["Meghan", "Susan", "Celina"],
            actions: ["proposing", "marrying", "crying", "hugging"],
            objects: ["ring"],
            screenshot: "../PrimeVideo/Screenshots/scene4.png"
        },

        {
            time: "3.51",
            description: "murder",
            actors: ["Meghan", "Susan", "Celina", "Jem"],
            actions: ["laughing", "talking", "killing", "murdering", "screaming", "crying"],
            objects: ["knife", "blood"],
            screenshot: "../PrimeVideo/Screenshots/scene5.png"
        }
        
    ];



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

  alert("<p>"+finalScenes[0].description+"</p>");
 
  document.write("<img src="+finalScenes[0].screenshot+" width= 50% height= 50%>");
}
    
  <img src="../PrimeVideo/Screenshots/scene1.png" onclick="loadVideo1()" value="Load Video 1" />
      
  function loadVideo1() {
 var videoEl = document.getElementsByTagName('video')[0];
 var sourceEl = videoEl.getElementsByTagName('source')[0];
 sourceEl.src = 'AmazonEarlyInsights.mp4';
 videoEl.load();
}
 <img src="../PrimeVideo/Screenshots/scene2.png" onclick="loadVideo2()" value="Load Video 2" />
      
  function loadVideo2() {
 var videoE2 = document.getElementsByTagName('video')[0];
 var sourceE2 = videoE2.getElementsByTagName('source')[0];
 sourceE2.src = 'AmazonEarlyInsights.mp4';
 videoE2.load();
}

  <img src="../PrimeVideo/Screenshots/scene3.png" onclick="loadVideo3()" value="Load Video 3" />
      
  function loadVideo3() {
 var videoE3 = document.getElementsByTagName('video')[0];
 var sourceE3 = videoE3.getElementsByTagName('source')[0];
 sourceE3.src = 'AmazonEarlyInsights.mp4';
 videoE3.load();
  }
      
  <img src="../PrimeVideo/Screenshots/scene4.png" onclick="loadVideo4()" value="Load Video 4" />
      
  function loadVideo4() {
 var videoE4 = document.getElementsByTagName('video')[0];
 var sourceE4 = videoE4.getElementsByTagName('source')[0];
 sourceE4.src = 'AmazonEarlyInsights.mp4';
 videoE4.load();
  }
      
  <img src="../PrimeVideo/Screenshots/scene5.png" onclick="loadVideo5()" value="Load Video 5" />
      
  function loadVideo5() {
 var videoE5 = document.getElementsByTagName('video')[0];
 var sourceE5 = videoE5.getElementsByTagName('source')[0];
 sourceE5.src = 'AmazonEarlyInsights.mp4';
 videoE5.load();
}




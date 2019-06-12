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
    document.write("<figure><img src=" + finalScenes[i].screenshot + " width= 30% height= 30% style=padding:5px;><figcaption>"+finalScenes[i].description+"</figcaption></figure>");
    
    /*var desc = finalScenes[i].description;
    document.write(desc.bold());

    //document.write(finalScenes[i].description);

    
    text = finalScenes[i].description;
    getDiv = document.getElementById('scDescriptions');
    */
    
  }

}

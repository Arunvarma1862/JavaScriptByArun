let Window; 
          
// Function that open the new Window 
function windowOpen() { 
    Window = window.open( 
        "./Card5.html", 
        "_blank", "width=400, height=300, top=230, left=540"); 
} 
  
// function that Closes the open Window 
function windowClose() { 
    Window.close(); 
} 

function show() { 
    let image = document.getElementById("image"); 
    image.src = 
"https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png" 
    document.getElementById("btnID") 
        .style.display = "none"; 
} 
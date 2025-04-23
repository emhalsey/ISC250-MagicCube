// provides a prompt box on load, not what we want but might be helpful

// window.onload = function(){

//     var input1 = prompt("Enter a color: ");
//     var color1 = input1
    
//     var input2 = prompt("Enter a color: ");
//     var color2 = input2
    
//     var input3 = prompt("Enter a color: ");
//     var color1 = input3

//     document.getElementById('color1').innerHTML = color1;
//     document.getElementById('color2').innerHTML = color1;
//     document.getElementById('color3').innerHTML = color1;
// };

//randomButton = function(){
    //document.getElementsByClassName("color1").className = "red";
//}


function randomButton() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'black'];
    const color1 = document.querySelectorAll('#amongus td');

    color1.forEach(cell => {
        // Remove existing color classes
        colors.forEach(color => cell.classList.remove(color));
        
        // Assign a new random color class
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cell.classList.add(randomColor);
    });
}

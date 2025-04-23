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
    const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'black'];

    // Shuffle helper
    function getRandomColor(excludeColors = []) {
        const availableColors = colorOptions.filter(color => !excludeColors.includes(color));
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    }

    const groups = ['color1', 'color2', 'color3'];
    const usedColors = [];

    groups.forEach(group => {
        const groupCells = document.querySelectorAll(`.${group}`);

        // Remove any old color classes (from colorOptions list)
        groupCells.forEach(cell => {
            colorOptions.forEach(color => cell.classList.remove(color));
        });

        // Assign a new random color that hasn't already been used
        const newColor = getRandomColor(usedColors);
        usedColors.push(newColor);

        // Add that color to all cells in the group
        groupCells.forEach(cell => cell.classList.add(newColor));
    });
}

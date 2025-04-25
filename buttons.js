window.onload = () => {
    document.querySelectorAll('table').forEach(table => {
      table.style.display = "none";
    });
  };
  
  
//   Random color shuffler
function randomButton(id) {
    
    const allItems = document.querySelectorAll('table');

    // Hide all tables first!
    allItems.forEach(table => {
        table.style.display = 'none';
    });

    allItems.forEach(item => {

        if (item.id === id) {
        
            const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'black'];

            // Shuffles the available colors
            function getRandomColor(excludeColors = []) {
                const availableColors = colorOptions.filter(color => !excludeColors.includes(color));
                return availableColors[Math.floor(Math.random() * availableColors.length)];
            }

            const groups = ['color1', 'color2', 'color3','color4','color5','color6'];
            const usedColors = [];

            groups.forEach(group => {
                const groupCells = item.querySelectorAll(`.${group}`);

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

            item.style.display = "block";
        }
        else 
        {
            item.style.display = "none";
        }
    });

}

// Random album shuffler

const albums = ['sos', 'blonde', 'gkmc', 'bornsinner', 'anti', 'untitled', 'channelorange'];

function showAlbum() {
    
    const allItems = document.querySelectorAll('table');

    // Hide all tables first!
    allItems.forEach(table => {
        table.style.display = 'none';
    });

    const randomId = albums[Math.floor(Math.random() * albums.length)];

    const randomTable = document.getElementById(randomId);

    if (randomTable) randomTable.style.display = 'table';
}

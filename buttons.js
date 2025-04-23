function randomButton() {
    const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'white', 'black'];

    // Shuffle helper
    function getRandomColor(excludeColors = []) {
        const availableColors = colorOptions.filter(color => !excludeColors.includes(color));
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    }

    const groups = ['color1', 'color2', 'color3','color4','color5','color6'];
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

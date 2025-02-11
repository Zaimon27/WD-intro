function showBox(day) {
    const box = document.getElementById('movingBox');
    const buttons = document.querySelectorAll('.day-button');

    buttons.forEach(button => {
        button.style.backgroundColor = '';
    });

    const dayColors = {
        monday: 'red',
        tuesday: 'orange',
        wednesday: 'yellow',
        thursday: 'green',
        friday: 'blue',
        saturday: 'indigo',
        sunday: 'violet'
    };

    box.style.backgroundColor = dayColors[day] || 'gray';
    const activeButton = document.querySelector(`button[onclick="showBox('${day}')"]`);
    if (activeButton) {
      activeButton.style.backgroundColor = dayColors[day] || '';
    }

}
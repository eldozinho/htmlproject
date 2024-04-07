fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projectHeader').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));

fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));
document.getElementById('bikeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var bikes = [
        {
            name: 'Bike 1',
            battery: 300,
            details: 'This bike has a battery size of 300.'
        },
        {
            name: 'Bike 2',
            battery: 500,
            details: 'This bike has a battery size of 500.'
        },
        {
            name: 'Bike 3',
            battery: 750,
            details: 'This bike has a battery size of 750.'
        }
    ];

    var selectedDistance = parseInt(document.getElementById('distance').value);
    var suitableBikes = bikes.filter(function(bike) {
        if (selectedDistance <= 15) {
            return bike.battery >= 0 && bike.battery <= 450;
        } else if (selectedDistance <= 100) {
            return bike.battery >= 400 && bike.battery <= 600;
        } else {
            return bike.battery > 600;
        }
    });

    var recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = '<h2>Recommended Bike(s)</h2>';
    suitableBikes.forEach(function(bike) {
        recommendationDiv.innerHTML += '<h3>' + bike.name + '</h3><p>' + bike.details + '</p>';
    });
});

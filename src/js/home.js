window.addEventListener('DOMContentLoaded', function () {

    console.log('loaded')
    let leftbutton = document.getElementById('leftbutton')
    let rightbutton = document.getElementById('rightbutton')

    let weather = [{ temp: " 94f ", speed: " 16mph ", degree: " 197 " }, { temp: " 43f ", speed: " 21.4mph ", degree: "180" }, { temp: "78f", speed: "8.15mph", degree: "108" }, { temp: "99f", speed: "6.5mph", degree: "165" }];
    let address = [
        { city: " Las Vegas, Nevada ", place: " The Summit " },
        { city: " Westhampton Beach, NY ", place: " DUNE DECK " },
        { city: " Amenia, New York ", place: " SILO RIDGE " },
        { city: " Big Sky, Montana ", place: " YELLOWSTONE CLUB " }
    ];

    let coordinates = [{ coordinate: "36.1094N / -115.3287W" }, { coordinate: "11.1094N / -5.3287W" }, { coordinate: "3.1094N / -25.3287W" }, { coordinate: "55.1094N / -66.3287W" }, { coordinate: "12.121212N / -23.456789W" }];

    let temp = document.getElementById('temp')
    temp.innerHTML = weather[0].temp
    let speed = document.getElementById('speed')
    speed.innerHTML = weather[0].speed
    let degree = document.getElementById('degree')
    degree.innerHTML = weather[0].degree

    let city = document.getElementById('city')
    city.innerHTML = address[0].city
    let place = document.getElementById('place')
    place.innerHTML = address[0].place
    let coordinate = document.getElementById('coordinates')
    coordinate.innerHTML = coordinates[0].coordinate

    let count = 0

    leftbutton.addEventListener('click', function () {
        if (count == 0) {
            count = weather.length - 1;
        }
        else if (count > 0) {
            count = count - 1;
        }
        temp.innerHTML = weather[count].temp
        speed.innerHTML = weather[count].speed
        degree.innerHTML = weather[count].degree

        city.innerHTML = address[count].city
        place.innerHTML = address[count].place

        coordinate.innerHTML = coordinates[count].coordinate
    })

    rightbutton.addEventListener('click', function () {
        if (count < 4) {
            count = count + 1;
            console.log(count);
            if(count==4){
                count=0;
            }
        
        }
        temp.innerHTML = weather[count].temp
        speed.innerHTML = weather[count].speed
        degree.innerHTML = weather[count].degree

        city.innerHTML = address[count].city
        place.innerHTML = address[count].place

        coordinate.innerHTML = coordinates[count].coordinate
    })

})

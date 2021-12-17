// recuperer lat,lng à partir du nom de la ville
result = document.getElementById("result")

function getCity(nomDeLaVille) { 
    
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${nomDeLaVille}&key=30db6ff952b34b0c8d75243a22b51d3e`)
    .then(response => {
        return response.json() 
    })
    .then(data => {
        // console.log(data.results[0].geometry);
        return data.results[0].geometry
    })
}

function getWeather(lat, lng) {
    
    return fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&appid=f77a3a0e3d02544372e54512229edf18`)
    .then(response => {
        return response.json() 
    })
    .then(data => {
        return data
    })  
}



document.addEventListener('DOMContentLoaded', () => {
    
    document.addEventListener('submit', (event) => {
        event.preventDefault()
        let input = document.getElementById('name').value
        getCity(input)
            .then(data => {    // 
                console.log("data dans getWeather : ", data)
                getWeather(data.lat, data.lng)
                .then(data => {
                console.log(data.list[0].weather[0].main)
                               
            })
        })        
    })
});

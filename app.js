let input=document.querySelector("input")
let btn=document.querySelector(".btn")
cardTitle=document.querySelector(".card-title")
const weather=document.querySelector(".card-text.weather")
let description=document.querySelector(".card-text.description")
let temperature=document.querySelector(".card-text.temperature")
let locationIcon = document.querySelector('.weather-icon');
let min=document.querySelector(".min-text")
let max=document.querySelector(".max-text")
let minMax=document.querySelector(".min-max")
let alert=document.querySelector(".alert")


btn.addEventListener("click",async(e)=>{
    try{
        e.preventDefault()
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=798096c4ad81f87dd7cdccbbb2a14477&units=metric`)
    const data=await res.json()
    cardTitle.textContent=data.name
    weather.textContent=data.weather[0].main
    description.textContent=data.weather[0].description
    temperature.textContent=data.main.temp+" °"
    max.textContent=data.main.temp_max+" °"
    min.textContent=data.main.temp_min+" °"
    minMax.classList.remove("d-none")
    
    const {icon} = data.weather[0];
    
    locationIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" alt="img">`
    input.value=""

    }catch(error){
        alert.classList.remove("d-none")
        setTimeout(()=>{
            alert.classList.add("d-none")  
        },3000)
    }
})

const apikey ='edb1b2074b737302fac36846f4db105e'

const getWeather = async(input)=>{
    if (!input) return;
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`)
        const data = await res.json()
        return data
        console.log(data)
        } catch (error) {
        console.error(error)
        }
    }

    export default getWeather
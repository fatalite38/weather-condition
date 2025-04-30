const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = document.querySelector('#input-location');

const sectionInfos = document.querySelector('#temp-info')

form?.addEventListener('submit', async(event) => {
    event.preventDefault();
   
    if (!input || !sectionInfos) return;
    const location = input.value;

    if (location.length < 3) {
        alert('Localização inválida');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=100ec97c7d07b5ebfc6f90009879fc9c&pt_br&units=metric`);
        const data = await response.json();

        const information = {
            city: data.name,
            temp: Math.round(data.main.temp),
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }

        sectionInfos.innerHTML = `

            <div class="city-info">
                <h2>${information.city}</h2>
                <span>${information.temp}°C</span>
            </div>

            <img src="${information.icon}" alt="">
        `;
    } catch (err) {
        console.log('Erro na obtenção dos dados da API', err);
    }  
});

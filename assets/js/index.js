"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-location');
const sectionInfos = document.querySelector('#temp-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionInfos)
        return;
    const location = input.value;
    if (location.length < 3) {
        alert('Localização inválida');
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=100ec97c7d07b5ebfc6f90009879fc9c&pt_br&units=metric`);
        const data = yield response.json();
        const information = {
            city: data.name,
            temp: Math.round(data.main.temp),
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
        sectionInfos.innerHTML = `

            <div class="city-info">
                <h2>${information.city}</h2>
                <span>${information.temp}°C</span>
            </div>

            <img src="${information.icon}" alt="">
        `;
    }
    catch (err) {
        console.log('Erro na obtenção dos dados da API', err);
    }
}));

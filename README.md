# 🌤️ Condições do Tempo

Aplicação web simples que consome a [OpenWeatherMap API](https://openweathermap.org/api) para exibir a temperatura atual e o ícone do clima de uma cidade digitada pelo usuário.

## 🧩 Funcionalidades

- Entrada de localização (nome da cidade)
- Busca assíncrona de informações meteorológicas
- Exibição da temperatura atual em Celsius
- Ícone do tempo correspondente à cidade

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (com TypeScript nos tipos)
- OpenWeatherMap API

## 📂 Estrutura do Projeto

 ├── index.html ├── css │ └── styles.css ├── js │ └── index.js └── README.md

## 🛠️ Como Usar

  1. Clone o repositório:
     ```bash
    git clone https://github.com/seu-usuario/weather-condition.git
  
  2. Navegue até o diretório do projeto:
     
    cd weather-condition
    
  3. Abra o arquivo index.html em um navegador moderno.
  
  4. Digite o nome de uma cidade no campo e clique em "Pesquisar".

Observações Importantes
A aplicação utiliza a chave da API diretamente no código. Para projetos reais, é recomendável armazenar a chave em um arquivo .env ou em variáveis de ambiente do servidor.

Certifique-se de substituir "YOUR_API_KEY" pela sua chave válida da API:
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`);


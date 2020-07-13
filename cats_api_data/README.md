<p>
  <img alt="Version" src="https://img.shields.io/badge/version-v1-blue.svg?cacheSeconds=2592000" />
  <a href="/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/vitikovan" target="_blank">
    <img alt="Twitter: vitikovan" src="https://img.shields.io/twitter/follow/vitikovan.svg?style=social" />
  </a>
</p>

# Projeto API The Cats  :cat: 

É um projeto que captura dados de uma API chamada de Gatos ([https://thecatsapi.com](https://thecatapi.com/)

## Desafio
- Para cada uma das raças de gatos disponíveis, armazenar as informações de
origem, temperamento e descrição em uma base de dados. (se disponível)
-  Para cada uma das raças acima, salvar o endereço de 3 imagens em uma base de
dados. (se disponível)
-  Salvar o endereço de 3 imagens de gatos com chapéu.
-  Salvar o endereço de 3 imagens de gatos com óculos.

- Utilizaremos uma ferramenta de _Grafana_ + _GrayLog_  crie uma query que mostre em tempo real os eventos que acontecem na execução da API criada no item 6, exemplos (Warning, Erro, Debug, Info, etc).
  
- Utilizaremos uma ferramenta de métricas _Grafana_ + _Prometheus_, para criar Dash Como estes 


docker run -d  -p 27017:27017 -v /home/victor/Project/apiCatsProject/cats_api_data/mongo:/data/db --name mongo mongo:latest

Caso necessite subir o container do mongo novamente lembrese de excluir o containe com nome mongo
Como criar uma colection

como coletar dos dados da API usando o codigo em Node.JS


docker-compose up -d prometheus
docker-compose up -d grafana
docker-compose up -d grafana-dashboards
docker-compose up -d mongo
sudo docker-compose up -d --build nodejs-application-cats

node index.js
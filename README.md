<p>
  <img alt="Version" src="https://img.shields.io/badge/version-v0-blue.svg?cacheSeconds=2592000" />
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

É um projeto que captura dados de uma API chamada de Gatos (https://theca

## Desafio
- Para cada uma das raças de gatos disponíveis, armazenar as informações de
origem, temperamento e descrição em uma base de dados. (se disponível)
-  Para cada uma das raças acima, salvar o endereço de 3 imagens em uma base de
dados. (se disponível)
-  Salvar o endereço de 3 imagens de gatos com chapéu.
-  Salvar o endereço de 3 imagens de gatos com óculos.

- Utilizaremos uma ferramenta de _Grafana_ + _GrayLog_  crie uma query que mostre em tempo real os eventos que acontecem na execução da API criada no item 6, exemplos (Warning, Erro, Debug, Info, etc).
  
- Utilizaremos uma ferramenta de métricas _Grafana_ + _Prometheus_, para criar Dash Como estes 

## Tecnologias Utilizadas

Serviço | Tecnologia
:-------: | :----------:
Container runtime | Docker
Container orchestration | Kubernetes
Logs | EFK
Metricas | Prometheus 
DataBase | MongoDB
API | NodeJS
Registrry | Docker hub

## Registry 
Aqui está o endereço de nosso registry no DockerHub. Lá voce vai encontrar imagens com os pacotes necessarios para funcionar normalmente

[Docker-Hub](https://hub.docker.com/u/augustovan)  :whale: 

## Kops(AWS)
No nosso lab foi utiizado o Kops (Kubernete Operations), na cloud da AWS para o provisonamento das maquiasn, de inicio startamos 1 mastes (t2.medium) de 2 nodes (t2.medium).

### Instalando e Configurando o Kops

AWS Credentials (Security Key / Access key) 
"aws configure"
 
 ## Instalando o Kops Linux

From Github:

```bash
curl -Lo kops https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64
chmod +x ./kops
sudo mv ./kops /usr/local/bin/
```
## kops create cluster


## kubernetes 
Utilizamos o kubernetes como nosso gerenciador de containers.

	![Topologia Api Cats](https://github.com/augustovan/apiCatsProject/blob/master/fotos/topologia.png)


  ### Arquiterura Kubernetes 

*4 Namsespaces (Prometheus, Grafana, Grafana, EFK, APP)
*PersistentVolume ( EBS - GP2(ext4))
*Storageclass ( cats-stc )

Comandos Kubernetes para criar esses  

## Helm Install
Para cada aplicação da Stack de monitoração que foi utilizada utilizando apenas o kubernetes seria necessario criar 5 arquivos (deployment, service, configmap, pvc e um ingress). Isso demandaria muito tempo. Por este motivo escolhi utilizar a solução Helm aonde eu faço a instalação e o gerenciamento das aplicações de forma mais simplificada  
 
comandos insta helm

## Deploy Stack Monitoring
Uma forma de centralizar todos os Dashs e um unico ponto escolhi a solução grafana desta forma foi possivel criar os dash de monitoramento dos ambiente do Prometheus (coleta da saude do cluster) e para fazer a coleta dos logs tanto dos clustes como das aplicações foi escolhido a pilha EFK (Elasticsearch, fluentd, Kibana). Vale apena pontuar que mesmo a Kibanada está sendo usado para criar as queries usando KQL e aplicamos como data source no Grafana. 

### Provisionamento Prometheus
"código embutido"
### Provisionamento Grafana 
"código embutido"
### Provisionamento EFK
"código embutido"

# On Primese

## Ansible
Para fazer o provisionamento do ambiente em um ambiente on primese vamos utilizar o 
Ansile , no arquivo *Ansible/PLaybook.yaml* comentar das linhas 1 a 17 (caso queira provisionar maquinas na AWS usando Ansible). depois disso se faz necessario alterar o arquivo HOSTS e colocar os ips das maquinas que vão fomrar o cluster K8s 

## PersistenVolum em ambiente On primessis
Para criar o Persistemvolum voce pode criar o PV local ou usar o atributo NFS o mais reomendado por conta de latencia.
Após o prosionamento do cluster k8s será necessario fazer a instalação do Helm e seguir os passos acima Topico do Helm 


# Continua....


## License
[MIT](https://choosealicense.com/licenses/mit/)




	![Texto alternativo opcional se a imagem não carregar](http://www.exemplodeurl.com/logo.png)

  	```
Este é um bloco de código.

```


	Este é um "código embutido".

  É assim que se faz texto em **negrito**.

  É assim que se faz texto em *itálico*.
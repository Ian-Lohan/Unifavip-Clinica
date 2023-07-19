# Sistema de Gerenciamento de Pacientes Unifavip Wyden

![GitHub repo size](https://img.shields.io/github/repo-size/marcosdex/Unifavip-Clinica?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/marcosdex/Unifavip-Clinica?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/marcosdex/Unifavip-Clinica?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/github/issues-pr-closed/marcosdex/Unifavip-Clinica?style=for-the-badge)

### Ajustes e Melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Estabelecer conexão e registros para o banco de dados (MYSQL)


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<Node / express / mysql2 / pg / Wamp/Xamp / MySQL \  [Wamp/Xamp: 2021/2022 <build stable> | Node: >0.6 | Express: ^4.18.2 | mysql2: ^3.4.3 | pg: ^8.11.1]`
- Se usando a versão PHP `<php: 7.4.26(php3/4) | Wamp/Xamp: 2021/2022 build stable>`
- Você tem uma máquina `<Windows>`
- ### Banco de dados suportados:
  `MySQL` `PostregreSQL`

## 🚀 Instalando Projeto Sistema de Gerenciamento de Pacientes Unifavip

Para instalar o projeto de clinicas unifavip wyden, siga estas etapas:

Windows:

```
git init
git clone https://github.com/MarcosDex/Unifavip-Clinica
-------------------------------------------------
Se usando a versão NodeExmpress:
Abra o terminal (visual studio code = Ctrl + j / Visual studio = Ctrl + ') {Utilize o PowerShell do terminal para executar os proximos comandos}
npm init -y
npm install express --save
npm install pg
npm install mysql2

```
```
Se usando PHP:
WamppServer:
Primeiro vamos cria a vh, basta ir em Windows -> system32 -> drivers -> etc -> hosts (aconselho notepad ++ por ser mais organizado que o bloco de notas):
Adicionamos isso ao arquivo da host 127.0.0.1 locadora.com (locadora é o nome da pasta que criarei mais pra frente)
logo depois iremos a este caminho: wamp64\bin\apache\apache2.4.51\conf\extra e então ira adicionar esta linha de codigo ao escopo:
<VirtualHost *:80>
  ServerName locadora.com
  ServerAlias localhost
  DocumentRoot C:\wamp64\www\locadora <escolhe o lugar onde salvou o wamp (no meu caso é no disco C)>
  <Directory "C:\wamp64\www\locadora"> <escolhe o lugar onde salvou o wamp (no meu caso é no disco C)>
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/vh.png">

```Abrimos então a pasta do wamp e vamos em www:```

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/www.png">

```Logo apos iremos criar uma pasta (locadora):```

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/Screenshot_1.png">

## Por ultimo basta abrir no navegador locadora.com (ele ira cair no index).
------------------------------------------------------------------------------

```
Xampp:
Basta ir na pasta do Xampp -> HTDOCS -> Criar uma nova pasta
```
## Agora só inserir os arquivos que desejar e acessar o navegador com o endereço do nome da pagina + o nome do arquivo desejado: {nomedapasta}/index.php

## ☕ Usando o Sistema de Gerenciamento de clinicas wyden

```
Se Node:
Va ao terminal e utilize node . OR node start OR npm start

Em php:
abra a localhost e acesse a pasta de destino local
```

## 📫 Contribuindo para Sistema de Gerenciamento pacientes Unifavip

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin Unifavip-Clinica/ <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/sebastrogers">
        <img src="https://avatars.githubusercontent.com/u/11651414?v=4" width="125px;" alt="Foto de Sebastião Rogério"/><br>
        <sub>
          <b>Sebastião Rogério</b>
        </sub>
      </a>
    </td>
    
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MarcosDex">
        <img src="https://instagram.fcau10-1.fna.fbcdn.net/v/t51.2885-15/339083231_729541212205997_8672986426066457533_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcau10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Yy04o2q9XVgAX-mxeFu&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA3MDc3ODQzNzI0MTA4NzkzNA%3D%3D.2-ccb7-5&oh=00_AfCmHFcfrR1RwqVUO-kcyzd3h-8rl8Mrw73igP6AB9ZkiQ&oe=64A89DEE&_nc_sid=ee9879" width="125px;" alt="Foto de Marcantonio Santos"/><br>
        <sub>
          <b>Marcantonio Santos Silva</b>
        </sub>
      </a>
    </td>

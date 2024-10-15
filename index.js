
var insta = document.getElementById("projeto1");
var inicio = document.getElementById("inicio");
var trd = document.getElementById("linha");
var pitch3 = document.getElementById("projeto2");
var pitch4 = document.getElementById("projeto3");
var labmeta = document.getElementById("projeto4");
var primavera = document.getElementById("projeto5");
var labgem = document.getElementById("projeto6");
var cards = document.querySelectorAll(".mais");
var texto = document.getElementById("sobremim");
var cards = document.querySelectorAll(".card");

var titulo = document.getElementById("titulo")
var sub = document.getElementById("sub")
var acesse = document.getElementById("acesse")
var fft = document.getElementById("fft");
var coluna = document.getElementById("cards");

var instagram = document.querySelector('.instagram');
var site = document.querySelector('.site');


cards.forEach((card) => {
    card.addEventListener("click", () => {
        trd.style.right = "100vw"
        trd.style.height="100vh"

        const classes = Array.from(card.classList);

        switch (classes[1]) {
            case "card1":
                fft.style.background = " var(--azule, linear-gradient(179deg, #3DBFC3 29.73%, rgba(106, 172, 174, 0.81) 89.4%))"
                titulo.innerText = "InSTAUFPR"
                sub.innerHTML = "<p class = 'descricao'>Site do Insituto de Soluções Aplicadas da UFPR. Cursos de pós graduação do setor de técnologia da UFPR.</p>"
                instagram.style.display="flex";
                instagram.href = "https://www.instagram.com/insta.ufpr/"
                site.href = "https://insta.ufpr.br/"
                break;
            case "card2":
                fft.style.background = " linear-gradient(260deg, #5D009B -72.57%, #350059 -24.61%, #8C00EB 96.8%)"
                titulo.innerText = "PitchDay 2023"
                sub.innerHTML = "<p class = 'descricao'>O Pitch aconteceu em parceria com a cervejaria Bodebrown, e foi um sucesso entre startups e comunidade. Feito em conjunto com Sofia Simões.</p>"
                instagram.style.display="none";
                site.href = "https://ap-leo.github.io/pitchday/"
                break;
            case "card3":
                fft.style.background = "black";
                titulo.innerText = "LabMeta"
                sub.innerHTML = "<p class = 'descricao'>Site para o Laboratório de Metaverso da UFPR. Ele conta um um código muito bom para manutenção sem necessidade de códigos extras! Feito em conjunto com Jun Sasaki.</p>"
                instagram.style.display="none";
                site.href="https://labmeta-web.github.io/site/"
                break;
            case "card4":
                fft.style.background = "linear-gradient(225deg, #F6971D 0.58%, #3DBFC3 74.43%)"
                titulo.innerText = "PitchDay 2024"
                sub.innerHTML = "<p class = 'descricao'>Criei o design para o evento. Possui uma contagem regressiva muito interessante.</p>"
                instagram.style.display="none";
                site.href="https://ap-leo.github.io/pitch24k/"
                break;
            case "card5":
                fft.style.background = "var(--roxo, linear-gradient(180deg, #AF61C3 27.83%, #352339 114.35%))"
                titulo.innerText = "Gbio"
                sub.innerHTML = "<p class = 'descricao'>Realizo a manutenção de sites no padrão UFPR. Site do laboratório do curso de Eng. Mecânica da UFPR.</p>"
                instagram.style.display="none";
                site.href="https://demec.ufpr.br/gbio/"
                break;
            case "card6":
                fft.style.background = "linear-gradient(158deg, #218CEE 14.41%, #E7F5FF 114.33%)"
                titulo.innerText = "Primavera em Ação 2024"
                sub.innerHTML = "<p class = 'descricao'>Um projeto criado por duas professoras. Eu e Jun demos vida a ele.</p>"
                instagram.style.display="flex";
                instagram.href="https://www.instagram.com/primaveraemacao_ufpr/"
                site.href="https://insta.ufpr.br/primaveraemacao/"
                break;
            default:
                console.log('Classe não reconhecida');
                break;
        }

    })
})

inicio.addEventListener("click", () => {
    trd.style.right = "0vw"
    trd.style.height="auto"
})

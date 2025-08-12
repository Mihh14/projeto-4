const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao passear pela Floresta de MariLand, My Melody encontra um diário mágico. O que ela faz?",
        alternativas: [
            {
                texto: "Decide usá-lo para guardar segredos e sentimentos",
                afirmacao: "My Melody demonstra seu lado sensível ao confiar seus pensamentos ao diário encantado."
            },
            {
                texto: "Entrega o diário à Kuromi para ela usar como plano de travessuras",
                afirmacao: "Mesmo sendo gentil, My Melody acredita que Kuromi pode aprender a usar seus poderes de forma positiva."
            }
        ]
    },
    {
        enunciado: "Durante um festival em MariLand, My Melody precisa escolher um presente especial para sua avó. Qual atitude ela toma?",
        alternativas: [
            {
                texto: "Prepara um bolo de amêndoas com carinho e decoração floral",
                afirmacao: "Ela honra suas raízes com afeto e criatividade, como sempre faria!"
            },
            {
                texto: "Pede ajuda ao rei Mari para criar um presente mágico",
                afirmacao: "Ela reconhece o valor das tradições mágicas de MariLand, mas prefere combinar magia com afeto."
            }
        ]
    },
    {
        enunciado: "Kuromi começa a espalhar pesadelos na Terra. My Melody descobre e precisa agir. Como ela se posiciona?",
        alternativas: [
            {
                texto: "Busca aliados na Terra e espalha boas ações com música e gentileza",
                afirmacao: "Ela transforma sentimentos bons em energia para combater os pesadelos com doçura."
            },
            {
                texto: "Confronta Kuromi diretamente com seu bastão mágico",
                afirmacao: "Mesmo sendo pacífica, ela entende que há momentos de firmeza quando se trata de proteger os sonhos."
            }
        ]
    },
    {
        enunciado: "No mundo humano, My Melody é convidada para apresentar um desfile escolar temático. Como ela participa?",
        alternativas: [
            {
                texto: "Costura suas próprias roupas inspiradas nas flores de MariLand",
                afirmacao: "Ela mostra seu estilo delicado e único com peças feitas à mão, encantando a plateia."
            },
            {
                texto: "Pede ajuda aos mascotes para criar um número musical surpresa",
                afirmacao: "Ela encanta todos com um espetáculo repleto de ternura e amizade."
            }
        ]
    },
    {
        enunciado: "Durante a jornada, My Melody encontra uma flor misteriosa que brilha à noite. O que ela faz?",
        alternativas: [
            {
                texto: "Cultiva a flor e escreve uma canção sobre sua beleza",
                afirmacao: "Ela transforma pequenos gestos em poesia e espalha alegria pela floresta."
            },
            {
                texto: "Entrega a flor ao Conselho Real de MariLand para investigar",
                afirmacao: "Sempre atenta aos mistérios mágicos, ela age com responsabilidade e curiosidade."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em MariLand...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

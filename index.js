const questions = [
    { q: "Ce materie îți place cel mai mult?", o: ["Matematică", "Informatică", "Economie", "Limba română"] },
    { q: "Cum preferi să lucrezi?", o: ["Rezolv probleme logice", "Scriu cod și testez", "Organizez documente sau finanțe", "Comunic cu oameni"] },
    { q: "Ce activitate te atrage cel mai mult?", o: ["Creez aplicații web", "Configurez rețele sau device-uri", "Lucrez cu facturi și registre", "Colaborez și scriu documente"] },
    { q: "Ce profil ți se potrivește?", o: ["Real", "Umanist", "Încă nu știu"] },
    { q: "Ai vrea un program mai scurt de 2-3 ani?", o: ["Da", "Nu", "Depinde", "Nu contează"] },
    { q: "Cum vezi viitorul profesional?", o: ["Programator", "Tehnician rețele", "Contabil", "Secretar", "Freelancer în IT"] },
    { q: "Ce te motivează cel mai mult?", o: ["Să creez ceva util", "Să rezolv probleme practice", "Să gestionez informații", "Să ajut și să comunic"] },
    { q: "Cât de mult îți place să lucrezi la PC?", o: ["Tot timpul", "Mult", "Doar când e nevoie", "Puțin"] },
    { q: "Ai vrea să înveți și în limba rusă?", o: ["Da", "Nu", "Poate", "Nu mă interesează"] }
];

const specialties = [
    "Programarea și testarea produselor program",
    "Dezvoltarea aplicațiilor web",
    "Rețele de calculatoare",
    "Rețele de calculatoare (instruire Dual)",
    "Contabilitate",
    "Servicii administrative și de secretariat",
    "Operator suport tehnic / introducere date"
];

const colors = ["#0070f3", "#e91e63", "#4caf50", "#ff9800", "#9c27b0"];

let step = 0;
let total = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function showQuestion() {
    const current = questions[step];
    questionEl.innerText = current.q;
    optionsEl.innerHTML = "";
    current.o.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.style.backgroundColor = colors[index % colors.length];
        btn.onclick = () => handleAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function handleAnswer(index) {
    total += index;
    step++;
    if (step < questions.length) {
        showQuestion();
    } else {
        const resultIndex = total % specialties.length;
        document.getElementById("quiz").style.display = "none";
        resultEl.innerHTML = `
    Specialitatea potrivită pentru tine este: <strong>${specialties[resultIndex]}</strong>
    <br>
    <img class='gif' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTl1bzd1YTZraHpya3ExM2dtZmt0ZGU0b2R1aTN3bTdxanBsdnpxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif' alt='Bravo!'>
    <button class="retry-btn" onclick="window.location.reload()">Reia testul</button>
    <div class="link">Te așteptăm la <a href="https://ceiti.md/" target="_blank">ceiti.md</a>!</div>
`;
    }
}

showQuestion();
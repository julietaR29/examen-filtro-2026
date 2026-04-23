const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;
const isStunned = false; 


function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage > 0 ? damage : 0;
}


const isAlive = (health) => health > 0;


const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
    return `${name} - ${characterClass} (Nivel ${level})`;
}


console.log("--- RESULTADOS DEL PERSONAJE ---");
console.log("Presentación:", getPresentation(name, characterClass, level));
console.log("¿Está vivo?:", isAlive(health));
console.log("Daño calculado:", calculateDamage(attack, defense));
console.log("¿Puede lanzar hechizo (costo 50)?:", canCastSpell(mana, 50, isStunned));


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('challenge-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const challengerName = document.getElementById('challenger-name').value;
        
        if (challengerName === "") {
            alert("Por favor, ingresá tu nombre para el desafío.");
            return;
        }

        console.log(`¡Desafío iniciado por ${challengerName}!`);
        
        const btn = form.querySelector('.btn');
        btn.textContent = "¡Desafío Enviado!";
        btn.style.backgroundColor = "#27ae60";
        form.reset();
    });
});



  

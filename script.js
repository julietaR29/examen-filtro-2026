
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('challenge-form');

  
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

     
        const name = document.getElementById('challenger-name').value;
        const className = document.getElementById('challenger-class').value;

     
        if (name === "" || className === "") {
            alert("Por favor, completá todos los campos para desafiar a Zara.");
            return;
        }

        
        console.log(`Desafío recibido: ${name} el ${className} está listo.`);
        
       
        const btn = form.querySelector('.btn');
        btn.textContent = "¡Inscripto con éxito!";
        btn.style.backgroundColor = "#27ae60"; // Cambia a verde
        
       
        form.reset();
    });
});

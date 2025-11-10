function navegarParaId(id) {

    const elementoAlvo = document.getElementById(id);

    if (elementoAlvo) {
        elementoAlvo.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'    
        });
    } 
    
}
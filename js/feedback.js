// Funcții pentru gestionarea feedback-ului și cererilor de contact

function reportIssue(type) {
    const issueTypes = {
        'group': 'Nu îmi convine grupul',
        'schedule': 'Nu îmi convine orarul',
        'teacher': 'Nu îmi convine profesorul',
        'price': 'Nu îmi convine prețul'
    };

    const message = issueTypes[type] || 'Problemă nedefinită';
    alert(`Feedback-ul dvs. a fost înregistrat: ${message}\nVă vom contacta în curând pentru a discuta această problemă.`);
    
    // Aici se poate adăuga logica pentru a trimite feedback-ul către server
    console.log(`Feedback înregistrat: ${message}`);
}

function requestManagerCall() {
    alert('Cererea dvs. a fost înregistrată. Un manager vă va contacta în cel mai scurt timp posibil.');
    
    // Aici se poate adăuga logica pentru a trimite cererea către manager
    console.log('Cerere de contact manager înregistrată');
}
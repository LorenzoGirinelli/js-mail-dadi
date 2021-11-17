// Lista mail
const mailutenti = [`franco91@gmail.com`,`lorenzo89@gmail.com`,`sara02@gmail.com`,`matteo15@gmail.com`,`carelo99@gmail.com`,`alessia00@gmail.com`,];

// Chiediamo all’utente la sua email
const userMail = prompt(`Digita la tua email`);
// console.log(userMail);

// Controlliamo nella lista chi può accedere
for ( let i = 0; i < mailutenti.length; i++) {
    const thismail = mailutenti[i];
    // console.log(mailutenti);

    if(thismail === userMail) {
        alert(`La tua mail è nella lista`);
    } else {
        alert(`La tua mail non è nella lista`);
    }
}

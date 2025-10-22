const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
    
}

names.forEach((thisName) => {
    console.log(thisName);
    
})
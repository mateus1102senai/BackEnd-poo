const pessoa = {
    primeiroNome: 'Mateus' ,
    sobrenome: 'Marcelino',
    idade: 16,
    corOlho: 'Castanho',
    altura: 170,
    dataNascimento: '11/02/2008',
    usaOculos: false,
    corPelo: 'black',
    corFavorita: 'azul',
    sexo: 'Masculino',
}; 

 // Primeira frase
console.log(' 1 - O ' + pessoa.primeiroNome + ' ' + pessoa.sobrenome + ' tem ' + pessoa.idade + ' anos! ' );

// Alterar um objeto
pessoa.sobrenome = 'Souza';

//Segunda frase
console.log(' 2 - O ' + pessoa.primeiroNome + ' ' + pessoa.sobrenome + ' tem ' + pessoa.idade + ' anos! ' );


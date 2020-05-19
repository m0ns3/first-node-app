// 1 - Create a method to get all the files inside a given path
// 2 - Create a method to Print all the files
// 3 - Create a method to sort and print the files
// 4 - Create a method to get the amount of files starting with one letter 



const logger = require('./logger');

const fs = require('fs');

fs.readdir('./', (err,files)=>{
	(err) ? console.log(err) : console.log('Lista de archivos: ',files);
	logger.ordenaImprime(files);
	logger.primeraLetra(files);
})

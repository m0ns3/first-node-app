let url = 'http://myurl.com';

log = (message1,message2) => {
	console.log(message1,message2 );
};


ordenaImprime = (archivos) =>{
	let ordenadosInverso = archivos.sort().reverse();
	console.log('Archivos ordenados de forma inversa: ', ordenadosInverso);
}
primeraLetra = (archivos) => {
	
	let arregloFinal = [];
	archivos.sort();
	for (let i = 0; i < archivos.length; i++) {
		
		if ( (archivos[i].charAt(0)).match(/^[A-Z]+$/i)) {
			arregloFinal.push(archivos[i]);
		}
		
	}
	console.log('Cantidad de archivos que empiezan con una letra: ', arregloFinal.length);

}


module.exports.log = log;
module.exports.ordenaImprime = ordenaImprime;
module.exports.primeraLetra = primeraLetra;
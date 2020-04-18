function sum() {
	let result = 0;
	for(let i=2 ; i< process.argv.length; i++) {
	result += process.argv[i];
	}
	return result;
}
console.log(result );

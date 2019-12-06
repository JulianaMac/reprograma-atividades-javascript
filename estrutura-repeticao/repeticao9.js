let num = 7;
let divisores = 0

for (let i = 1; i <= num; i++) {

	if (num % i == 0) {
		divisores++;	
	}
}

if (divisores == 2) {
	console.log(num + ' é primo.')
} else {
    console.log(num + ' não é primo.')
}

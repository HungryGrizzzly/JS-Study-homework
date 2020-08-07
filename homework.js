// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumTo(5));

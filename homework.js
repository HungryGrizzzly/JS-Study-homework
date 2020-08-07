// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumTo(5));

// Как исправить код ниже, чтобы он вывел в консоль 5 разных значений (от 0 до 4):
/*for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		 console.log(i);
	}, 1000);
} */

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, 1000);
}

// Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее развернутой в обратную сторону.

function reverseString(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}
console.log(reverseString("Maxleid"));

// Напишите функцию, которая принимает два аргумента и возвращает их сумму.

function sum(x, y) {
	if (arguments.length === 1) {
		return function (y) {
			return x + y;
		};
	} else {
		return x + y;
	}
}
console.log(sum(5)(5));

// Напишите функцию, которая проверит, является ли слово палиндромом.

function isPalindrome(str) {
	str = str.toLowerCase();

	return str === str.split("").reverse().join("");
}

console.log(isPalindrome("agga"));

// Напишите функцию, которая принимает два аргумента и проверяет, является ли одно слово анаграммой другого.

function isAnagramm(anagramm1, anagramm2) {
	anagramm1 = anagramm1.toLowerCase().split("").sort().join("");
	anagramm2 = anagramm2.toLowerCase().split("").sort().join("");
	return anagramm1 === anagramm2;
}

console.log(isAnagramm("finder", "fried"));

// Напишите функцию, которая возвращает число из последовательности фибоначи по его порядковому номеру.

function fibonacci(Number) {
	let first = 1;
	let second = 1;
	for (let i = 3; Number >= i; i++) {
		let sum = first + second;
		first = second;
		second = sum;
	}
	return second;
}

console.log(fibonacci(3));

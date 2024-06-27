// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num ** 2;
        } else {
            return num * 3;
        }
    });
}

// Function to format an array of strings based on an array of numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // this should be [4, 9, 16, 15, 10]

const strings = ['Hello', 'World', 'JavaScript', 'Array', 'Functions'];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript', 'ARRAY', 'functions']

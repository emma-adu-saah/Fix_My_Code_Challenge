#!/usr/bin/node

/*
    Print a square with the character #

    The size of the square must be the first argument
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

let size;

// Check if the argument is in hexadecimal format
if (process.argv[2].startsWith("0x")) {
    // Convert hexadecimal to decimal and then convert it back to string in base 10
    size = parseInt(process.argv[2], 16).toString(10);
} else {
    // Parse the argument as a decimal number
    size = parseInt(process.argv[2], 10);
}

if (isNaN(size)) {
    process.stderr.write("Invalid size\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

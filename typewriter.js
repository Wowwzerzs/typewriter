const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    // console.log will add a new line character (\n) to the end of the string. 
    // However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.
    // console.log(char);
    process.stdout.write(char);
  }, delay);
  delay += 50; // 50ms longer delay for each character
}

setTimeout(() => {
  process.stdout.write("\n"); // Add a newline character
}, delay + 50); // Delay it after the last character by an additional 50ms

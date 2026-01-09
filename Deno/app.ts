const text = "This is a test - and it should be stored in a file!";

const encoder = new TextEncoder(); // bilgisayarın anlayacağı dile çevirmek için bu şart
const data = encoder.encode(text);

Deno.writeFile("message.txt", data).then(() => {
  console.log("Wrote to file!");
});

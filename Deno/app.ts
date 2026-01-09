import { Application, Router } from "@oak/oak";

const app = new Application();
const router = new Router();
// 2. Define Routes
router.get("/", (ctx) => {
  ctx.response.body = "Welcome to the Home Page!";
});

router.get("/about", (ctx) => {
  ctx.response.body = "This is the About Page.";
});

// 3. Register Middleware
app.use(router.routes());
app.use(router.allowedMethods());

// 4. Start the Server
console.log("Server is running on port 8000...");
await app.listen({ port: 8000 });

/*const text = "This is a test - and it should be stored in a file!";

const encoder = new TextEncoder(); // bilgisayarın anlayacağı dile çevirmek için bu şart
const data = encoder.encode(text);

Deno.writeFile("message.txt", data).then(() => {
  console.log("Wrote to file!");
});*/

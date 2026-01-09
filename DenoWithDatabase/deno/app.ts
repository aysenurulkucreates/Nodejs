import { Application } from "@oak/oak";

import todosRoutes from "./routes/todos.ts";

const app = new Application();

app.use(async (ctx, next) => {
  // 1. "Kimler gelebilir?" -> "*" demek "Herkes gelebilir" demektir.
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");

  // 2. "Hangi işlemleri yapabilirler?" -> GET, POST, PUT, DELETE serbest.
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );

  // 3. "Hangi başlıkları gönderebilirler?" -> Content-Type (JSON yolluyoruz ya, o yüzden lazım)
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  await next(); // Tamam, şimdi diğer kodlara geçebilirsin.
});

app.use(async (ctx, next) => {
  console.log("Middleware!");
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });

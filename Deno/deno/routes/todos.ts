import { Router } from "@oak/oak";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post("/todos", async (ctx) => {
  const body = ctx.request.body;

  const data = await ctx.request.body.json();

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: data.text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: "Created new todo!", todo: newTodo };
});

router.put("/todos/:todoId", (ctx) => {
  const id = ctx.params.todoId;
  ctx.response.body = { message: `ID'si ${id} olan güncellendi (Demo)` };
});

router.delete("/todos/:todoId", (ctx) => {
  const id = ctx.params.todoId;
  ctx.response.body = { message: `ID'si ${id} olan silindi (Demo)` };
});

export default router;

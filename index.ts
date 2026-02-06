import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Ale")
  .listen(8000);

console.log(
  `🦊 Elysia running at http://localhost:${app.server?.port}`
);

app.get("/hello/:name", ({ params }) => {
  return {
    message: `Hallo ${params.name}!`
  };
});


app.post("/login", ({ body }) => {
  const { email, password } = body as {
    email: string;
    password: string;
  };


  return {
    success: true,
    email
  };
});


import express from "express";

const app = express();
const PORT = process.env.PORT || 3500;

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, username: "anson", displayName: "Anson" },
    { id: 2, username: "aby", displayName: "Aby" },
    { id: 3, username: "ken", displayName: "Ken" },
    { id: 4, username: "bill", displayName: "Bill" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send({ id: 123, name: "Chicken", price: 12.99 });
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// link - http://localhost:3500/

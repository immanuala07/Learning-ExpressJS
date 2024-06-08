import express from "express";

const app = express();
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

// link - http://localhost:3500/

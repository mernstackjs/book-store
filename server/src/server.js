import express from "express";
import cors from "cors";
export const app = express();

app.use(
  cors({
    origin: ["https://ahmed-book-store.netlify.app", "http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Your server health is OKi",
  });
});

const peoples = [];
app.post("/add-person", (req, res) => {
  const person = {
    id: Math.random().toString(36).substring(2, 8),
    name: req.body.name,
  };
  peoples.push(person);
  res.status(201).json({
    message: "Add person",
  });
});
app.get("/get-peoples", (req, res) => {
  res.status(200).json({
    peoples,
  });
});

const PORT = 5059;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

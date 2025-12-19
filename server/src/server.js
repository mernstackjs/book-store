import express from "express";
import cors from "cors";
export const app = express();

app.use(
  cors({
    origin: "https://ahmed-book-store.netlify.app",
  })
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "your server health is OKi",
  });
});

const PORT = 5059;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

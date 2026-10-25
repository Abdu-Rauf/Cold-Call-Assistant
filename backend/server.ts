import "dotenv/config";
import cors from "cors";
import express from "express";
import { callRoutes } from "./routes/callRoutes";

const app = express();
const PORT = 3000;
const frontendOrigin = process.env.FRONTEND_URL ?? "http://localhost:5173";

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());
app.use(callRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

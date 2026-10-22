import express from "express";
import { callRoutes } from "./routes/callRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(callRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

import { Router } from "express";
import { startCallController } from "../controllers/startCallController";
import { callStageController } from "../controllers/callStageController";
import { endCallController } from "../controllers/endCallController";

export const callRoutes = Router();

callRoutes.post("/calls", startCallController);
callRoutes.post("/calls/:id/stages", callStageController);
callRoutes.post("/calls/:id/end", endCallController);

import type { Request, Response } from "express";
import { startCallService } from "../services/startCallService";

export async function startCallController(req: Request, res: Response) {
  const call = await startCallService();
  res.status(201).json(call);
}

import type { Request, Response } from "express";
import { startCallService } from "../services/startCallService";

export async function startCallController(req: Request, res: Response) {
  const call = await startCallService();
  if (!call.success) {
    return res.status(500).json({ error: call.message });
  }

  res.status(201).json(call);
}

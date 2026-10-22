import type { Request, Response } from "express";
import { endCallService } from "../services/endCallService";
import { parseCallStageInput } from "../utils/parseCallStageInput";

export async function endCallController(req: Request, res: Response) {
  const parsed = parseCallStageInput(req.params.id, req.body);
  if ("error" in parsed) {
    res.status(400).json({ error: parsed.error });
    return;
  }

  const call = await endCallService(parsed.data);
  res.json(call);
}

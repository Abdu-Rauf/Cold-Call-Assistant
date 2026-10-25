import type { Request, Response } from "express";
import { endCallService } from "../services/endCallService";
import { parseCallStageInput } from "../utils/parseCallStageInput";

export async function endCallController(req: Request<{id: string}>, res: Response) {

  const parsed = parseCallStageInput(req.params.id, req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error });
  }

  const call = await endCallService(parsed.data);
  if (!call.success) {
    res.status(500).json({ error: call.message });
    return;
  }

  res.status(200).json(call);
}

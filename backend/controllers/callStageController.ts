import type { Request, Response } from "express";
import { callStageService } from "../services/callStageService";
import { parseCallStageInput } from "../utils/parseCallStageInput";

export async function callStageController(
  req: Request<{ id: string }>,
  res: Response,
) {
  const parsed = parseCallStageInput(req.params.id, req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error });
  }

  const stage = await callStageService(parsed.data);
  if (!stage.success) {
    return res.status(500).json({ error: stage.message });
  }

  res.status(201).json(stage);
}

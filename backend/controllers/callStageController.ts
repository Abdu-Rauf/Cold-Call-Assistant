import type { Request, Response } from "express";
import { callStageService } from "../services/callStageService";
import { parseCallStageInput } from "../utils/parseCallStageInput";

export async function callStageController(req: Request, res: Response) {
  const parsed = parseCallStageInput(req.params.id, req.body);
  if ("error" in parsed) {
    res.status(400).json({ error: parsed.error });
    return;
  }

  const stage = await callStageService(parsed.data);
  res.status(201).json(stage);
}

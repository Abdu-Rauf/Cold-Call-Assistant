import type { CallStageInput } from "../utils/parseCallStageInput";
import { prisma } from "../lib/prisma";

export async function callStageService(input: CallStageInput) {
  try {
    await prisma.callStage.create({
      data: {
        callId: BigInt(input.callId),
        stage: input.stage,
        stageOutcome: input.stageOutcome,
        prospectWords: input.prospectWords,
      },
    });

    return {
      success: true,
      message: "Stage outcome recorded.",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "stage can not be recorded.";
    return { success: false, message };
  }
}

import type { CallStageInput } from "../utils/parseCallStageInput";
import { prisma } from "../lib/prisma";

export async function endCallService(input: CallStageInput) {
  try {
    await prisma.$transaction([
      // persist the last stage details
      prisma.callStage.create({
        data: {
          callId: BigInt(input.callId),
          stage: input.stage,
          stageOutcome: input.stageOutcome,
          prospectWords: input.prospectWords,
        },
      }),
      // update the details of the call created
      prisma.call.update({
        where: { id: BigInt(input.callId) },
        data: {
          lastStage: input.stage,
          outcome: input.stageOutcome,
          status: "ended",
        },
      }),
    ]);

    return {
      success: true,
      message: "Call ended.",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "call can not be ended.";
    return { success: false, message };
  }
}

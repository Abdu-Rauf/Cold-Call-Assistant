export type CallStageInput = {
  callId: number;
  stage: string;
  stageOutcome: string;
  prospectWords?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function parseCallStageInput(
  id: string,
  body: unknown,
):
  | { success: true; data: CallStageInput }
  | { success: false; error: string } {
  const callId = Number(id);
  if (!Number.isFinite(callId) || callId <= 0) {
    return { success: false, error: "A valid call id is required." };
  }

  if (body === null || typeof body !== "object") {
    return { success: false, error: "Request body must be an object." };
  }

  const { stage, stageOutcome, prospectWords } = body as Record<
    string,
    unknown
  >;

  if (!isNonEmptyString(stage)) {
    return { success: false, error: "stage is required." };
  }

  if (!isNonEmptyString(stageOutcome)) {
    return { success: false, error: "stageOutcome is required." };
  }

  if (
    prospectWords !== undefined &&
    prospectWords !== null &&
    typeof prospectWords !== "string"
  ) {
    return { success: false, error: "prospectWords must be a string." };
  }

  return {
    success: true,
    data: {
      callId,
      stage: stage.trim(),
      stageOutcome: stageOutcome.trim(),
      ...(typeof prospectWords === "string"
        ? { prospectWords: prospectWords }
        : {}),
    },
  };
}

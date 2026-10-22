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
  id: string | undefined,
  body: unknown,
): { error: string } | { data: CallStageInput } {
  const callId = Number(id);
  if (!Number.isFinite(callId) || callId <= 0) {
    return { error: "A valid call id is required." };
  }

  if (body === null || typeof body !== "object") {
    return { error: "Request body must be an object." };
  }

  const { stage, stageOutcome, prospectWords } = body as Record<
    string,
    unknown
  >;

  if (!isNonEmptyString(stage)) {
    return { error: "stage is required." };
  }

  if (!isNonEmptyString(stageOutcome)) {
    return { error: "stageOutcome is required." };
  }

  if (
    prospectWords !== undefined &&
    prospectWords !== null &&
    typeof prospectWords !== "string"
  ) {
    return { error: "prospectWords must be a string." };
  }

  return {
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

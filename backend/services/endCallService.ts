import type { CallStageInput } from "../utils/parseCallStageInput";

export async function endCallService(input: CallStageInput) {
  // Insert the current stage in call_stages, then update the calls row.
  return input;
}

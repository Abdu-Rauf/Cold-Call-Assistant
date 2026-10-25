import { apiRequest } from "./client";

export type CallStagePayload = {
  stage: string;
  stageOutcome: string;
  prospectWords?: string;
};

export type StartCallResponse = {
  success: boolean;
  id?: string;
  message: string;
};

export type CallActionResponse = {
  success: boolean;
  message: string;
};

export function startCall() {
  return apiRequest<StartCallResponse>("/calls", { method: "POST" });
}

export function recordCallStage(callId: string, payload: CallStagePayload) {
  return apiRequest<CallActionResponse>(`/calls/${callId}/stages`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function endCall(callId: string, payload: CallStagePayload) {
  return apiRequest<CallActionResponse>(`/calls/${callId}/end`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

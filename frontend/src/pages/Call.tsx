import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  endCall as endCallRequest,
  recordCallStage,
} from "@/api/calls";
import { CALL_STAGES } from "@/data/callStages";
import { Stages } from "@/pages/Stages";

type CallLocationState = {
  callId?: string;
};

export function Call() {
  const navigate = useNavigate();
  const location = useLocation();
  const callId = (location.state as CallLocationState | null)?.callId;

  const [stageNumber, setStageNumber] = useState(1);
  const [theirWords, setTheirWords] = useState("");
  const [happened, setHappened] = useState<string | null>(null);

  const currentStage = CALL_STAGES[stageNumber - 1];

  useEffect(() => {
    if (!callId) {
      navigate("/", { replace: true });
    }
  }, [callId, navigate]);

  async function recordCurrentStage() {
    if (!callId || !currentStage || !happened) {
      return;
    }

    await recordCallStage(callId, {
      stage: currentStage.stageName,
      stageOutcome: happened,
      prospectWords: theirWords || undefined,
    });
  }

  async function goNext() {
    if (!happened) {
      return;
    }

    await recordCurrentStage();
    setTheirWords("");
    setHappened(null);

    if (stageNumber < CALL_STAGES.length) {
      setStageNumber((current) => current + 1);
    }
  }

  async function handleEndCall() {
    if (!callId || !currentStage || !happened) {
      return;
    }

    await endCallRequest(callId, {
      stage: currentStage.stageName,
      stageOutcome: happened,
      prospectWords: theirWords || undefined,
    });
    setTheirWords("");
    setHappened(null);
    navigate("/");
  }

  if (!callId || !currentStage) {
    return null;
  }

  return (
    <Stages
      stageNumber={currentStage.stageNumber}
      stageName={currentStage.stageName}
      stageDescription={currentStage.stageDescription}
      theyMaySay={currentStage.theyMaySay}
      happenedOptions={currentStage.happenedOptions}
      nextStageName={currentStage.nextStageName}
      theirWords={theirWords}
      onTheirWordsChange={setTheirWords}
      happened={happened}
      onHappenedChange={setHappened}
      onNext={goNext}
      onEndCall={handleEndCall}
    />
  );
}

import { useState } from "react";
import { CALL_STAGES } from "@/data/callStages";
import { Stages } from "@/pages/Stages";

export default function App() {
  const [stageNumber, setStageNumber] = useState(1);
  const [theirWords, setTheirWords] = useState("");
  const [happened, setHappened] = useState<string | null>(null);

  const currentStage = CALL_STAGES[stageNumber - 1];

  function recordCurrentStage() {
    // save in stage table
    return null;
  }
  function goNext() {
    if (!happened) {
      return;
    }

    recordCurrentStage();
    setTheirWords("");
    setHappened(null);

    if (stageNumber < CALL_STAGES.length) {
      setStageNumber((current) => current + 1);
    }
  }

  function endCall() {
    recordCurrentStage();
    setTheirWords("");
    setHappened(null);
  }

  if (!currentStage) {
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
      onEndCall={endCall}
    />
  );
}

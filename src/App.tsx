import { useState } from "react";
import { Stages } from "@/pages/Stages";

type StageContent = {
  stageNumber: number;
  stageName: string;
  stageDescription: string;
  theyMaySay: string[];
  happenedOptions: string[];
  nextStageName: string;
};

type StageInfo = {
  stageNumber: number;
  stageName: string;
  happened: string | null;
  herWords: string;
};

const CALL_STAGES: StageContent[] = [
  {
    stageNumber: 1,
    stageName: "Opening",
    stageDescription:
      "Reach the right person and say who you are. The prospect decides in the first ten seconds whether this call is worth a minute.",
    theyMaySay: [
      "Who are you?",
      "Where did you get my contact from?",
      "Who's this?",
      "What is this about?",
    ],
    happenedOptions: [
      "Acknowledged",
      "Busy / unavailable",
      "Wrong contact",
      "Moved company",
    ],
    nextStageName: "Permission",
  },
];

export default function App() {
  const [stageNumber, setStageNumber] = useState(1);
  const [herWords, setHerWords] = useState("");
  const [happened, setHappened] = useState<string | null>(null);

  const currentStage = CALL_STAGES[stageNumber - 1];

  function saveStageInfo(row: StageInfo) {
    void row;
    // Insert `row` into stageinfo.
  }

  function recordCurrentStage() {
    if (!currentStage) {
      return;
    }

    saveStageInfo({
      stageNumber: currentStage.stageNumber,
      stageName: currentStage.stageName,
      happened,
      herWords,
    });
  }

  function goNext() {
    recordCurrentStage();
    setHerWords("");
    setHappened(null);

    if (stageNumber < CALL_STAGES.length) {
      setStageNumber((current) => current + 1);
    }
  }

  function endCall() {
    recordCurrentStage();
    setHerWords("");
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
      herWords={herWords}
      onHerWordsChange={setHerWords}
      happened={happened}
      onHappenedChange={setHappened}
      onNext={goNext}
      onEndCall={endCall}
    />
  );
}

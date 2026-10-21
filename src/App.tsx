import { Stages } from "@/pages/Stages";

export default function App() {
  return (
    <Stages
      stageNumber={1}
      stageName="Opening"
      stageDescription="Reach the right person and say who you are. The prospect decides in the first ten seconds whether this call is worth a minute."
      theyMaySay={[
        "Who are you?",
        "Where did you get my contact from?",
        "Who's this?",
        "What is this about?",
      ]}
      happenedOptions={[
        "Acknowledged",
        "Busy / unavailable",
        "Wrong contact",
        "Moved company",
      ]}
      nextStageName="Permission"
    />
  );
}

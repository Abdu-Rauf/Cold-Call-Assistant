export type StageContent = {
  stageNumber: number;
  stageName: string;
  stageDescription: string;
  theyMaySay: string[];
  happenedOptions: string[];
  nextStageName: string;
};

export const CALL_STAGES: StageContent[] = [
  {
    stageNumber: 1,
    stageName: "Opening",
    stageDescription:
      "Reach the right person and say who you are. The prospect decides in the first ten seconds whether this call is worth a minute.",
    theyMaySay: [
      "Who's this?",
      "From where are you calling?",
      "May I know who's this?",
      "Where did you get my contact from?",
    ],
    happenedOptions: [
      "Confirmed it's them",
      "Busy or unavailable",
      "Wrong person",
      "Left the company",
    ],
    nextStageName: "Purpose",
  },
  {
    stageNumber: 2,
    stageName: "Purpose",
    stageDescription:
      "Say in one or two sentences why you called, in words the prospect can repeat to a colleague. A purpose they cannot repeat is a purpose they did not hear.",
    theyMaySay: [
      "What are you calling for?",
      "What is this regarding?",
      "What is this report?",
      "Is this a paid service?",
    ],
    happenedOptions: ["Ready to continue", "Not interested", "Can't talk now"],
    nextStageName: "Permission",
  },
  {
    stageNumber: 3,
    stageName: "Permission",
    stageDescription:
      "Find out whether they are willing to talk now. A clear yes, a clear no, or a time to call back are all good outcomes. Talking on without one is not.",
    theyMaySay: [
      "Go ahead, yeah, go ahead.",
      "Yeah, please. No problem.",
      "It would be better if you send it to me on WhatsApp.",
      "Can you call me later?",
    ],
    happenedOptions: [
      "Gave permission",
      "Call back later",
      "Wants information first",
      "Refused to talk",
    ],
    nextStageName: "Their business",
  },
  {
    stageNumber: 4,
    stageName: "Their business",
    stageDescription:
      "Ask about their company and their work before saying anything about yours. People talk about what they do; they rarely listen to what you do.",
    theyMaySay: [
      "It's a back office, so nothing of that sort happens here.",
      "You will have to speak to somebody at the head office.",
      "Our distributor handles our Indian business.",
      "I am not the right person. You should speak to someone else.",
    ],
    happenedOptions: [
      "Shared how they work",
      "Not the right person",
      "Referred someone else",
      "Wouldn't discuss the business",
    ],
    nextStageName: "Their need",
  },
  {
    stageNumber: 5,
    stageName: "Their need, in their words",
    stageDescription:
      "Hear what the prospect is trying to achieve or struggling with, in their own words. Capture exactly what they said.",
    theyMaySay: [
      "The biggest challenge is manpower requirement. Skilled manpower.",
      "We have an internal business model, actually, and we are following it.",
      "I am not really comfortable sharing my plan with you.",
    ],
    happenedOptions: [
      "Shared a need",
      "No need right now",
      "Wouldn't share details",
    ],
    nextStageName: "Objection",
  },
  {
    stageNumber: 6,
    stageName: "Objection",
    stageDescription:
      "Hear the reason for a no and understand it. A reason you understand can be answered on this call or the next; a reason you talked over cannot.",
    theyMaySay: [
      "We are working with consultants, so we don't require anything.",
      "I am not the decision maker in all these things.",
      "You will have to speak to somebody at the head office.",
      "I'm not interested in this at this point of time.",
    ],
    happenedOptions: [
      "Open to next steps",
      "Not interested",
      "Already has a consultant",
      "Needs someone else's approval",
    ],
    nextStageName: "Next step",
  },
  {
    stageNumber: 7,
    stageName: "Next step",
    stageDescription:
      "Agree one concrete thing: a document on WhatsApp or email, a call at a named time, a meeting. One thing, named, with a time or a channel.",
    theyMaySay: [
      "You can send it on WhatsApp.",
      "Can you send the mail, please?",
      "Can you call me tomorrow?",
      "Send it to me, and then we can discuss.",
    ],
    happenedOptions: [
      "Will receive the report",
      "Callback booked",
      "Meeting booked",
      "No next step",
    ],
    nextStageName: "Close",
  },
  {
    stageNumber: 8,
    stageName: "Close",
    stageDescription: "Confirm how the conversation ended and save the call.",
    theyMaySay: [
      "Thank you.",
      "Thank you for your time.",
      "All right, thanks. Bye.",
      "I'll wait for the report.",
    ],
    happenedOptions: ["Closed with a next step", "Closed with no next step"],
    nextStageName: "Finish",
  },
];

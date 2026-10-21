import { ArrowRight, PhoneOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const TOTAL_STAGES = 8;

export type StagesProps = {
  stageNumber: number;
  stageName: string;
  stageDescription: string;
  theyMaySay: string[];
  happenedOptions: string[];
  nextStageName: string;
  herWords: string;
  onHerWordsChange: (value: string) => void;
  happened: string | null;
  onHappenedChange: (value: string) => void;
  onNext?: () => void;
  onEndCall?: () => void;
};

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export function Stages({
  stageNumber,
  stageName,
  stageDescription,
  theyMaySay,
  happenedOptions,
  nextStageName,
  herWords,
  onHerWordsChange,
  happened,
  onHappenedChange,
  onNext,
  onEndCall,
}: StagesProps) {
  return (
    <main className="flex min-h-svh justify-center bg-background px-4 py-8 sm:px-6 sm:py-12">
      <Card className="w-full max-w-2xl shadow-sm">
        <CardHeader className="gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="secondary">
              Stage {stageNumber} of {TOTAL_STAGES}
            </Badge>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: TOTAL_STAGES }, (_, index) => {
                const step = index + 1;
                const isComplete = step < stageNumber;
                const isCurrent = step === stageNumber;

                return (
                  <span
                    key={step}
                    className={
                      isCurrent
                        ? "size-2 rounded-full bg-primary"
                        : isComplete
                          ? "size-1.5 rounded-full bg-primary/50"
                          : "size-1.5 rounded-full bg-border"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <CardTitle className="text-2xl tracking-tight">
              {stageName}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {stageDescription}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <section className="space-y-3">
            <SectionLabel>They may say</SectionLabel>
            <ul className="space-y-2">
              {theyMaySay.map((line) => (
                <li
                  key={line}
                  className="rounded-lg bg-muted/70 px-3 py-2.5 text-sm leading-relaxed text-foreground"
                >
                  “{line}”
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section className="space-y-3">
            <SectionLabel>What happened</SectionLabel>
            <div
              className="grid grid-cols-1 gap-2 sm:grid-cols-2"
              role="group"
              aria-label="What happened"
            >
              {happenedOptions.map((option) => {
                const isSelected = happened === option;

                // option - string from the array on that iteration (like line in theyMaySay).
                // The function runs once per option.
                // Each run returns one <Button>.
                // .map builds an array of those buttons; React renders them inside the grid <div>.
                // onclick sethappend runs, map runs again and react renders with the changed isSelected value.

                return (
                  <Button
                    key={option}
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    size="lg"
                    aria-pressed={isSelected}
                    className="h-auto min-h-10 justify-start whitespace-normal py-2.5 text-left"
                    onClick={() => onHappenedChange(option)}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
          </section>

          <Separator />

          <section className="space-y-3">
            <Label htmlFor="her-words">
              <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Her words
              </span>
            </Label>
            <Textarea
              id="her-words"
              value={herWords}
              onChange={(event) => onHerWordsChange(event.target.value)}
              placeholder="Write what they said..."
              className="min-h-32 resize-y"
            />
          </section>
        </CardContent>

        <CardFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="destructive"
            size="lg"
            onClick={onEndCall}
          >
            <PhoneOff data-icon="inline-start" />
            End call
          </Button>
          <Button type="button" size="lg" onClick={onNext}>
            Next: {nextStageName}
            <ArrowRight data-icon="inline-end" />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Stages;

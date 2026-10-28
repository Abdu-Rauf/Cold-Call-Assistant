import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { startCall } from "@/api/calls";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Home() {
  const navigate = useNavigate();

  async function handleStartCall() {
    const result = await startCall();
    if (!result.success || !result.id) {
      return;
    }
    navigate("/call", { state: { callId: result.id } });
  }

  return (
    <main className="flex min-h-svh justify-center bg-background px-4 py-8 sm:px-6 sm:py-12">
      <Card className="w-full max-w-2xl shadow-sm">
        <CardHeader className="gap-4">
          <CardTitle className="text-2xl tracking-tight">
            Cold Call Assistant
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Work through the call stages, record what happened, and keep notes
            on what they said.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            type="button"
            size="lg"
            onClick={handleStartCall}
          >
            <Phone data-icon="inline-start" />
            Start call
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

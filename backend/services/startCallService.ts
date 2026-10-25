import { prisma } from "../lib/prisma";

export async function startCallService() {
  try {
    const call = await prisma.call.create({
      data: {},
    });

    return {
      success: true,
      id: call.id.toString(),
      message: "Call started.",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "call can not be started.";
    return { success: false, message };
  }
}

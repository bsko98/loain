import { z } from "zod";

const PartyFilterSchema = z.object({
  startGate: z.number().int().min(0).max(10),
  endGate: z.number().int().min(0).max(10),
  startTime: z.string().nonempty(),
  startMastery: z.number().int().min(0).max(10),
  endMastery: z.number().int().min(0).max(10),
  lastSupporter: z.boolean(),
  lastDealer: z.boolean(),
  environment: z.number().int().min(0).max(2),
});

export const UpdatePartySchema = z.object({
  partyTitle: z.string().min(2).max(30),
  partyFilter: PartyFilterSchema,
});

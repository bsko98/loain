import {z} from "zod";

// `arkPassive` 객체의 스키마
const ArkPassiveSchema = z.object({
  evolution: z.number().int().min(0).max(200),
  enlightenment: z.number().int().min(0).max(200),
  leap: z.number().int().min(0).max(200),
});

// `transcend` 객체의 스키마
const TranscendSchema = z.object({
  weapon: z.number().int().min(0).max(200),
  armor: z.number().int().min(0).max(200),
});

// `card` 배열 내부의 각 객체에 대한 스키마
const CardSchema = z.object({
  awakening: z.number().int().min(0).max(50),
});

const PartyFilterSchema = z.object({
  startGate: z.number().int().min(0).max(10),
  endGate: z.number().int().min(0).max(10),
  startTime: z.string().nonempty(),
  startMastery: z.number().int().min(0).max(10),
  endMastery: z.number().int().min(0).max(10),
  itemLevel: z.number().min(0).max(2000),
  arkPassive: ArkPassiveSchema,
  transcend: TranscendSchema,
  title: z.string().min(0).max(50),
  card: CardSchema,
  lastSupporter: z.boolean(),
  lastDealer: z.boolean(),
});


export const CreatePartySchema = z.object({
  partyTitle: z.string().min(2).max(30),
  boss: z.string().min(1).max(30),
  difficulty: z.number().int().min(0).max(5),
  partyFilter: PartyFilterSchema,
});

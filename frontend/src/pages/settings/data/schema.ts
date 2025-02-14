import { z } from 'zod';

const gameSchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    gameType: z.string(),
    allowItemExchange: z.string(),
    instructions: z.string(),
});
export type Game = z.infer<typeof gameSchema>;

export const gameListSchema = z.array(gameSchema);

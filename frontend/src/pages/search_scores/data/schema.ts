import { z } from 'zod';

const campaignStatusSchema = z.union([
    z.literal('Pending'),
    z.literal('Approved'),
    z.literal('InProgress'),
    z.literal('Finished'),
    z.literal('Canceled'),
]);
export type CampaignStatus = z.infer<typeof campaignStatusSchema>;

export const counterPart = z.object({
    address: z.string(),
    fullName: z.string(),
    imageUrl: z.string(),
    field: z.string(),
});

const campaignSchema = z.object({
    id: z.string(),
    counterPart: counterPart,
    name: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    createdDate: z.coerce.date(),
    status: campaignStatusSchema,
});
export type Campaign = z.infer<typeof campaignSchema>;

export const campaignListSchema = z.array(campaignSchema);

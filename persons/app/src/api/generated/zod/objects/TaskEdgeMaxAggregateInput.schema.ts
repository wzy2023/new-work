/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TaskEdgeMaxAggregateInputType>;
export const TaskEdgeMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), createdAt: z.literal(true).optional(), updatedAt: z.literal(true).optional(), isDeleted: z.literal(true).optional(), type: z.literal(true).optional(), source: z.literal(true).optional(), target: z.literal(true).optional()
}).strict() as SchemaType;

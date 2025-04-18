/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TaskNodeSelect>;
export const TaskNodeSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional(), isDeleted: z.boolean().optional(), type: z.boolean().optional(), data: z.boolean().optional()
}).strict() as SchemaType;

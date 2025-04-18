/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HabitGroupDefaultArgsObjectSchema } from './HabitGroupDefaultArgs.schema';
import { HabitRecordInputSchema } from '../input/HabitRecordInput.schema';
import { HabitItemCountOutputTypeDefaultArgsObjectSchema } from './HabitItemCountOutputTypeDefaultArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.HabitItemInclude>;
export const HabitItemIncludeObjectSchema: SchemaType = z.object({
    group: z.union([z.boolean(),
    z.lazy(() => HabitGroupDefaultArgsObjectSchema)]).optional(), records: z.union([z.boolean(),
    z.lazy(() => HabitRecordInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => HabitItemCountOutputTypeDefaultArgsObjectSchema)]).optional()
}).strict() as SchemaType;

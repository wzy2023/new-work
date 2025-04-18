/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export const NestedDateTimeWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.date().optional(), z.string().datetime().optional()]), in: z.union([z.date().array().optional(), z.string().datetime().array().optional()]), notIn: z.union([z.date().array().optional(), z.string().datetime().array().optional()]), lt: z.union([z.date().optional(), z.string().datetime().optional()]), lte: z.union([z.date().optional(), z.string().datetime().optional()]), gt: z.union([z.date().optional(), z.string().datetime().optional()]), gte: z.union([z.date().optional(), z.string().datetime().optional()]), not: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional(), _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(), _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict() as SchemaType;

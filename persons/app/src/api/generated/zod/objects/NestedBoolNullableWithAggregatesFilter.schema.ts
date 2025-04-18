/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter>;
export const NestedBoolNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.boolean(),
    z.null()]).optional().nullable(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(), _min: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional(), _max: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional()
}).strict() as SchemaType;

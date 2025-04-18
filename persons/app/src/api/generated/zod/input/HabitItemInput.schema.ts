/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
;
import type { Prisma } from '@prisma/client';

;
import { HabitItemSelectObjectSchema } from '../objects/HabitItemSelect.schema';
import { HabitItemIncludeObjectSchema } from '../objects/HabitItemInclude.schema';
import { HabitItemWhereUniqueInputObjectSchema } from '../objects/HabitItemWhereUniqueInput.schema';
import { HabitItemWhereInputObjectSchema } from '../objects/HabitItemWhereInput.schema';
import { HabitItemOrderByWithRelationInputObjectSchema } from '../objects/HabitItemOrderByWithRelationInput.schema';
import { HabitItemScalarFieldEnumSchema } from '../enums/HabitItemScalarFieldEnum.schema';
import { HabitItemCreateInputObjectSchema } from '../objects/HabitItemCreateInput.schema';
import { HabitItemUncheckedCreateInputObjectSchema } from '../objects/HabitItemUncheckedCreateInput.schema';
import { HabitItemCreateManyInputObjectSchema } from '../objects/HabitItemCreateManyInput.schema';
import { HabitItemUpdateInputObjectSchema } from '../objects/HabitItemUpdateInput.schema';
import { HabitItemUncheckedUpdateInputObjectSchema } from '../objects/HabitItemUncheckedUpdateInput.schema';
import { HabitItemUpdateManyMutationInputObjectSchema } from '../objects/HabitItemUpdateManyMutationInput.schema';
import { HabitItemUncheckedUpdateManyInputObjectSchema } from '../objects/HabitItemUncheckedUpdateManyInput.schema';
import { HabitItemCountAggregateInputObjectSchema } from '../objects/HabitItemCountAggregateInput.schema';
import { HabitItemMinAggregateInputObjectSchema } from '../objects/HabitItemMinAggregateInput.schema';
import { HabitItemMaxAggregateInputObjectSchema } from '../objects/HabitItemMaxAggregateInput.schema';
import { HabitItemAvgAggregateInputObjectSchema } from '../objects/HabitItemAvgAggregateInput.schema';
import { HabitItemSumAggregateInputObjectSchema } from '../objects/HabitItemSumAggregateInput.schema';
import { HabitItemOrderByWithAggregationInputObjectSchema } from '../objects/HabitItemOrderByWithAggregationInput.schema';
import { HabitItemScalarWhereWithAggregatesInputObjectSchema } from '../objects/HabitItemScalarWhereWithAggregatesInput.schema'

type HabitItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.HabitItemFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.HabitItemFindFirstArgs>,
    findMany: z.ZodType<Prisma.HabitItemFindManyArgs>,
    create: z.ZodType<Prisma.HabitItemCreateArgs>,
    createMany: z.ZodType<Prisma.HabitItemCreateManyArgs>,
    delete: z.ZodType<Prisma.HabitItemDeleteArgs>,
    deleteMany: z.ZodType<Prisma.HabitItemDeleteManyArgs>,
    update: z.ZodType<Prisma.HabitItemUpdateArgs>,
    updateMany: z.ZodType<Prisma.HabitItemUpdateManyArgs>,
    upsert: z.ZodType<Prisma.HabitItemUpsertArgs>,
    aggregate: z.ZodType<Prisma.HabitItemAggregateArgs>,
    groupBy: z.ZodType<Prisma.HabitItemGroupByArgs>,
    count: z.ZodType<Prisma.HabitItemCountArgs>
}

export const HabitItemInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), where: HabitItemWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), where: HabitItemWhereInputObjectSchema.optional(), orderBy: z.union([HabitItemOrderByWithRelationInputObjectSchema, HabitItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HabitItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HabitItemScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), where: HabitItemWhereInputObjectSchema.optional(), orderBy: z.union([HabitItemOrderByWithRelationInputObjectSchema, HabitItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HabitItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HabitItemScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), data: z.union([HabitItemCreateInputObjectSchema, HabitItemUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([HabitItemCreateManyInputObjectSchema, z.array(HabitItemCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), where: HabitItemWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: HabitItemWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), data: z.union([HabitItemUpdateInputObjectSchema, HabitItemUncheckedUpdateInputObjectSchema]), where: HabitItemWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([HabitItemUpdateManyMutationInputObjectSchema, HabitItemUncheckedUpdateManyInputObjectSchema]), where: HabitItemWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => HabitItemSelectObjectSchema.optional()), include: z.lazy(() => HabitItemIncludeObjectSchema.optional()), where: HabitItemWhereUniqueInputObjectSchema, create: z.union([HabitItemCreateInputObjectSchema, HabitItemUncheckedCreateInputObjectSchema]), update: z.union([HabitItemUpdateInputObjectSchema, HabitItemUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: HabitItemWhereInputObjectSchema.optional(), orderBy: z.union([HabitItemOrderByWithRelationInputObjectSchema, HabitItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HabitItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), HabitItemCountAggregateInputObjectSchema]).optional(), _min: HabitItemMinAggregateInputObjectSchema.optional(), _max: HabitItemMaxAggregateInputObjectSchema.optional(), _avg: HabitItemAvgAggregateInputObjectSchema.optional(), _sum: HabitItemSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: HabitItemWhereInputObjectSchema.optional(), orderBy: z.union([HabitItemOrderByWithAggregationInputObjectSchema, HabitItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: HabitItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(HabitItemScalarFieldEnumSchema), _count: z.union([z.literal(true), HabitItemCountAggregateInputObjectSchema]).optional(), _min: HabitItemMinAggregateInputObjectSchema.optional(), _max: HabitItemMaxAggregateInputObjectSchema.optional(), _avg: HabitItemAvgAggregateInputObjectSchema.optional(), _sum: HabitItemSumAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: HabitItemWhereInputObjectSchema.optional(), orderBy: z.union([HabitItemOrderByWithRelationInputObjectSchema, HabitItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: HabitItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(HabitItemScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), HabitItemCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as HabitItemInputSchemaType;

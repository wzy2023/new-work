/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HabitRecordWhereUniqueInputObjectSchema } from './HabitRecordWhereUniqueInput.schema';
import { HabitRecordUpdateWithoutHabitInputObjectSchema } from './HabitRecordUpdateWithoutHabitInput.schema';
import { HabitRecordUncheckedUpdateWithoutHabitInputObjectSchema } from './HabitRecordUncheckedUpdateWithoutHabitInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.HabitRecordUpdateWithWhereUniqueWithoutHabitInput>;
export const HabitRecordUpdateWithWhereUniqueWithoutHabitInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HabitRecordWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => HabitRecordUpdateWithoutHabitInputObjectSchema), z.lazy(() => HabitRecordUncheckedUpdateWithoutHabitInputObjectSchema)])
}).strict() as SchemaType;

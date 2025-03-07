import 'server-only'

import { cache } from 'react'
import { headers } from 'next/headers'

import { createTRPCContext } from '../trpc'
import { createHydrationHelpers } from '@trpc/react-query/rsc'

import { createQueryClient } from './query-client'
import { createCaller, type AppRouter } from '../root'

const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-trpc-source', 'rsc')
  return createTRPCContext({ headers: heads })
})

const getQueryClient = cache(createQueryClient)
const caller = createCaller(createContext)

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
)

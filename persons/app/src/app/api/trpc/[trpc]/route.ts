import { type NextRequest } from 'next/server'

import { createTRPCContext } from '@/server/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { env } from '@/env'
import { appRouter } from '@/server/root'

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  })
}

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
          console.error(
            666,
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          )
        }
        : undefined,
  })
}

export { handler as GET, handler as POST }

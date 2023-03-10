import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from 'utils/prisma'

export const createContext = ({
    req,
    res
}: {
    req: NextApiRequest, res: NextApiResponse
}) => {
    return { req, res, prisma }
}

export type Context = ReturnType<typeof createContext>
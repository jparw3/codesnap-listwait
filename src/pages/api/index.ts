import { User } from '@prisma/client'
import prisma from '../../../lib/prisma'

export default async function handle(req: { body: { email: any; name: any } }, res: { json: (arg0: User) => void }) {
  const { email, name } = req.body
  const result = await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
  })
  res.json(result)
}

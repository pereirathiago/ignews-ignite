import { NextApiRequest, NextApiResponse } from "next";

export default (request : NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id

  const users = [
    { id: 1, name: 'Thiago' },
    { id: 2, name: 'giovanne' },
    { id: 3, name: 'joao' },
  ]

  const user = users.find(user => user.id === Number(id))

  return response.json(user)
}
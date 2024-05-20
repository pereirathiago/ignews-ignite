import { NextApiRequest, NextApiResponse } from "next";

export default (request : NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Thiago' },
    { id: 2, name: 'giovanne' },
    { id: 3, name: 'joao' },
  ]

  return response.json(users)
}
import type { NextRequest } from 'next/server'

export const POST = async (request: NextRequest): Promise<Response> => {
	return new Response('Невер гона гив ю ап\nневер гона лет ю даун\n')
}

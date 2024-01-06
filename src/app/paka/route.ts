import type { NextRequest } from 'next/server'

export const POST = async (request: NextRequest): Promise<Response> => {
	return new Response('never gonna give you up\nnever gonna let you down\n')
}

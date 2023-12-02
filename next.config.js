/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'www.fb24m.ru',
				pathname: '/**/*'
			}
		]
	}
}

export default nextConfig

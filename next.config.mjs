/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog',
      'date-fns',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'didinmediagroup.s3.ap-southeast-3.amazonaws.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/tentang-kami",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/layanan",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/harga-paket",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/portofolio",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/kontak",
        permanent: true,
      },
    ]
  },
}

export default nextConfig

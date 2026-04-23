/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/tentang-kami",
        permanent: true,
      },
      {
        source: "/features",
        destination: "/fitur",
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

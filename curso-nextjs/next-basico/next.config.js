/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  nextConfig
  //,
  // env: {
  //   //{process.env.bd.path} <- como acesar a variável global
  //   bdPath :'mysql.....'
  // }
}
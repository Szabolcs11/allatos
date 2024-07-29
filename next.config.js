/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  experimental: {
    taint: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf|docx)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/files",
            publicPath: "/_next/static/files",
          },
        },
      ],
    });

    return config;
  },
});

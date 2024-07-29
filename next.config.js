/** @type {import('next').NextConfig} */

module.exports = {
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
};

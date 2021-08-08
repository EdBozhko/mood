const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id';
  },
  distDir: 'build',
  images: { domains: ['mood-design.com.ua'] },
};

module.exports = withPlugins(
  [
    [
      withImages({
        inlineImageLimit: 1,
        webpack(config, options) {
          return config;
        },
      }),
      {
        esModule: true,
        fileExtensions: ['jpeg', 'svg', 'jpg', 'png'],
      },
    ],
    withFonts,
    withVideos,
  ],
  nextConfig,
);

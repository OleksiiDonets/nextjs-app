const path = require('path')
module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-mock',
  ],
  "framework": "@storybook/react",
  "typescript": { reactDocgen: false },
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
   config.module.rules.push({
     test: /\.css$/i,
     use: [
      {
         loader: "postcss-loader",
         options: { implementation: require.resolve("postcss") }
      }
     ],
     include: path.resolve(__dirname, "../"),
   });
   // Return the altered config
   return config;
 },
}
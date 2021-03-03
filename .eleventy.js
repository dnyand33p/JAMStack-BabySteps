// I'm the configuration file for eleventy
// tell me where to look for templates and where to put generated static files
// Eleventy uses me at the time of build and not while watching,serving
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return { dir: { input: "src", output: "_site" } };
};

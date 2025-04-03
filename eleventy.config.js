export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/pdfs");
    eleventyConfig.addPassthroughCopy("src/bilder");
  };
export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("pdfs")
    eleventyConfig.addCollection("pdfs", function(collectionApi) {
      return collectionApi.getAll().filter(item => item.inputPath.endsWith(".pdf"));
    });
  };
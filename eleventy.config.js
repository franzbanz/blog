export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/button.js");
  eleventyConfig.addPassthroughCopy("src/pdfs");
  eleventyConfig.addPassthroughCopy("src/bilder");
  eleventyConfig.addPassthroughCopy("src/impressum.md");

  eleventyConfig.addFilter("currentDate", function() {
    const options = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return new Date().toLocaleDateString('de-DE', options);
  });
};
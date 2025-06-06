export default async function (eleventyConfig) {
    // Copy the 'demo' folder to the output
    eleventyConfig.addPassthroughCopy("demos");

    return {
        // other config options if needed
    };
}

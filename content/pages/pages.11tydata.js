export default {
	layout: "layouts/page.njk",
	eleventyComputed: {
		permalink: (data) => {
			// If permalink already set in frontmatter, use it
			if (data.permalink) {
				return data.permalink;
			}
			// Otherwise compute from path, removing first segment: "/pages/foo/bar" → "/foo/bar/"
			// Also strip "/index" suffix so index files resolve to their directory path
			return data.page.filePathStem.replace(/^\/[^\/]+/, '').replace(/\/index$/, '') + '/' || '/';
		}
	}
};

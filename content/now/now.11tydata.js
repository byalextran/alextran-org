export default {
	tags: [
		"now"
	],
	layout: "layouts/now.njk",
	permalink: "/now/{{ page.fileSlug }}/",
	eleventyComputed: {
		title: data => {
			const entryDate = new Intl.DateTimeFormat("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
				timeZone: "UTC",
			}).format(data.page.date);

			return `Now Entry for ${entryDate}`;
		}
	}
};

export default {
	tags: [
		"lately"
	],
	layout: "layouts/lately.njk",
	permalink: "/lately/{{ page.fileSlug }}/",
	eleventyComputed: {
		title: data => {
			const entryDate = new Intl.DateTimeFormat("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
				timeZone: "UTC",
			}).format(data.page.date);

			return `Lately Entry for ${entryDate}`;
		}
	}
};

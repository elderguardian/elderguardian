const { createApi } = require("unsplash-js");

const appName = "github.com/elderguardian";

const unsplash = createApi({
  accessKey: process.env.GITHUB_UNSPLASH_ACCESS_KEY,
});

(async () => {
  const photo = await unsplash.photos.getRandom({});

  if (photo.type !== "success") {
    throw new Error("Could not get a random Photo.");
  }

  const imageUrl = photo.response.urls.regular;
  const imageHtmlUrl = photo.response.links.html;
  const authorName = photo.response.user.username;
  const authorHtmlUrl = `https://unsplash.com/@${authorName}?utm_source=${appName}&amp;utm_medium=referral`;

  const readmeContent =
    "`Today's random Image:`\n" +
    "<div>\n<br>\n<br>\n" +
    `<img height="300" src="${imageUrl}" alt="Random Image from Unsplash API.">\n` +
    "<br>\n<br>\n</div>\n\n" +
    `Photo by <a href="${authorHtmlUrl}" target="_blank_" rel="noreferrer noopener">${authorName}</a> ` +
    `on <a href="${imageHtmlUrl}" target="_blank" rel="noreferrer noopene">Unsplash</a>`;

  console.log(readmeContent);
})();

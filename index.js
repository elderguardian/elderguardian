const { createApi } = require("unsplash-js");

const appName = "github.com/elderguardian";

const unsplash = createApi({
  accessKey: process.env.GITHUB_UNSPLASH_ACCESS_KEY,
});

(async () => {
  const photo = await unsplash.photos.getRandom({
    orientation: "landscape",
  });

  if (photo.type !== "success") {
    throw new Error("Could not get a random Photo.");
  }

  const imageUrl = photo.response.urls.regular;
  const imageHtmlUrl = photo.response.links.html;
  const authorName = photo.response.user.username;
  const authorHtmlUrl = `https://unsplash.com/@${authorName}?utm_source=${appName}&amp;utm_medium=referral`;

  const readmeContent = '| <div align="left">'
    + '<h3>Hey, I am Luca</h3> <p>A student and hobby developer in love with software.</p>'
    + ' <pre>Based in Hessen, Germany<br>Fachoberschule Student<br>I mostly use JavaScript/TypeScript, PHP and Java<br>Mostly Self-taught using the Internet</pre>'
    + '</div> | <div align="center">'
    + '<h3>Today\'s random image:</h3>'
    + `<img height="120" src="${imageUrl}" alt="Random Image from Unsplash API."><br>`
    + `Photo by <a href="${authorHtmlUrl}" target="_blank_" rel="noreferrer noopener">${authorName}</a> `
    + `on <a href="${imageHtmlUrl}" target="_blank" rel="noreferrer noopene">Unsplash</a>`
    + '</div><br> |\n'
    + '|---|---|'

  console.log(readmeContent);
})();

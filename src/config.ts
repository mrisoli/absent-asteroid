import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://risoli.dev/", // replace this with your deployed domain
  author: "Marcelo Risoli",
  desc: "My Personal Blog",
  title: "Marcelo Risoli",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mrisoli",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcelorisoli/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "marcelo@risoli.co",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/mgrisoli",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/celorisoli",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC4h67R6YNDoL-qtUFM6DNQw",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@mrisoli",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];

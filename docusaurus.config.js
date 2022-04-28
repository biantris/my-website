const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Beatriz Oliveira",
  tagline: "Full-Stack Software Engineer 🏳️‍🌈",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/me.png",
  organizationName: "biantris",
  projectName: "my-website",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: "Home 🏠",
        logo: {
          alt: "My Site Logo",
          src: "img/me.png",
        },
        items: [
          {
            type: "about",
            docId: "about",
            label: "About",
            position: "left",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Contents",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/biantris",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/biantris_",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Suport me",
            items: [
              {
                html: `<a href="https://www.patreon.com/beatrizoliveira" target="_blank"><img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Become my Patreon" style="height: 60px !important;width: 217px !important;" ></a>`,
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/biantris_",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email",
                to: "mailto: anabeatrizxoliveira@gmail.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/biantris",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Beatriz Oliveira, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

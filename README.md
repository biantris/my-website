# My Website

### Screenshots

![screely-1641755154717](https://user-images.githubusercontent.com/65451957/148696887-44b5f14c-b018-4229-92a3-5500664a75cb.png)

![image](https://user-images.githubusercontent.com/65451957/148697029-33fdd1a8-c336-42a5-9e01-54d1491e7bc7.png)

### Lighthouse

![image](https://user-images.githubusercontent.com/65451957/148697080-88a99e09-9f4f-473b-a64a-5427657bc644.png)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

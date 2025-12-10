# Jopi.js

Just One Perfect Interface

#### Installation

##### For your projects

If you want to install `jopi.js` in your proyect, you should read the [package installation guide](https://github.com/TokkoLabs/jopi.js/tree/master/packages/jopijs).

##### For package development

If you want to work on `jopi.js` you should install the dependencies and then start the development server.

For `yarn`:

```
$ cd jopi.js
$ yarn
$ yarn run dev
```

For `npm`:

```
$ cd jopi.js
$ npm (i | install) # Use one of these options
$ npm run dev
```

#### Packages we use to build Jopi:

- Storybook (for building isolated components)
- React
- Styled-components (CSS-in-JS)
- Styled-system (Style props for rapid UI development)
- Lerna.js (monorepo and tool for publish packages used in CI)
- Framer Motion (animations)

#### Things to improve

- [ ] STRUCTURE: Upgrade dependencies (Framer Motion) 
- [ ] STRUCTURE: Upgrade dependencies (storybook 5.3)
- [ ] DOCS: Improve documentation of the packages.

(*) Today, every visual element is a package in npm. Maybe we should group them by elements (forms, core, extra, theme, hooks)

### New thigs to do

- [ ] PACKAGES: Carousel.
- [ ] PACKAGES: Textarea - restyling.
- [ ] PACKAGES: Alert - restyling.
- [ ] PACKAGES: Box - restyling.
- [ ] PACKAGES: List - restyling.
- [ ] PACKAGES: Paginator - restyling.
- [ ] PACKAGES: Label - restyling.
- [ ] PACKAGES: Table filter. 

### QA:

##### How can i build my own theme for jopi.js?

You can check [how to theming](https://styled-system.com/getting-started#theming) and follow the [theme specification](https://styled-system.com/theme-specification).

##### Can i use Jopi.js in a typescript project?

Yes you can, we are using it. The only extra thing that you need to do is crate a declarations.d.ts file on your project and declare jopi.js packages that you would like to use. Like:

```
declare module '@quintoandar-tokko/jopijs'
declare module '@quintoandar-tokko/theme'
declare module '@quintoandar-tokko/hooks'
```

##### How can i manually publish a package to NPM?

For this proccess we use [lerna cli](https://github.com/lerna/lerna#readme).
Basically, we use 2 commands to achieve the goal.

```
lerna version
```

To generate new versions of the modified packages.
Maybe, sometimes, we need to use the `--force-publish` option of the command to force the generation of new versions.

```
lerna publish
```

Publish packages that have changed since the last release. Here we have 2 options for publish.
`from-package`: explicitly publish packages where the latest version is not present in the registry.
`from-git`: Explicitly publish packages tagged in the current commit

For more info check lerna docs.

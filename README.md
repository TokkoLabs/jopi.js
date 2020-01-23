# Jopi.js

Just One Perfect Interface

#### Packages we use to build Jopi:

- Storybook (for building isolated components)
- React
- Styled-components (CSS-in-JS)
- Styled-system (Style props for rapid UI development)
- Lerna.js (monorepo and tool for publish packages used in CI)
- Framer Motion (animations)

#### Things to improve

- [ ] STRUCTURE: Too many packages, reduce amount (1)
- [ ] STRUCTURE: Use typescript
- [ ] STRUCTURE: Upgrade dependencies (storybook 5.3)
- [ ] CI: Publish a testing version
- [ ] CI: Production setup
- [ ] CI - BUG: Make publish dont push to github or something else
- [ ] PACKAGES: Calendar
- [ ] PACKAGES: Button (hover).
- [ ] DOCS: Improve documentation of the packages.

(1) Today, every visual element is a package in npm. Maybe we should group them by elements (forms, core, extra, theme, hooks)

### New thigs to do

- [ ] PACKAGES: Carousel.
- [ ] PACKAGES: Drawer.

### QA:

##### How can i build my own theme for jopi.js?

You can check [how to theming](https://styled-system.com/getting-started#theming) and follow the [theme specification](https://styled-system.com/theme-specification).

##### Can i use Jopi.js in a typescript project?

Yes you can, we are using it. The only extra thing that you need to do is crate a declarations.d.ts file on your project and declare jopi.js packages that you would like to use. Like:

```
declare module '@oneloop/jopijs'
declare module '@oneloop/theme'
declare module '@oneloop/hooks'
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

[![npm](https://img.shields.io/badge/npm-1.1.3-green.svg)](https://www.npmjs.com/package/generator-framerjs-webpack-simple)
[![platform](https://img.shields.io/badge/platform-windows_linux_macos-green.svg)](#)
[![downloads](https://img.shields.io/npm/dt/generator-framerjs-webpack-simple.svg](#)
[![license](https://img.shields.io/badge/license-MIT_License-lightgrey.svg)](#)

# generator-framerjs-webpack-simple
A simple framer.js yeoman template using webpack for package control, which can give you the ability of making UX prototyping on Windows & Linux.

# Getting Started
1. Install yeoman
```bash
$ npm i -g yo yeoman-generator chalk yosay
```
2. Install generator-framerjs-webpack-simple from npm
```bash
$ npm i -g generator-framerjs-webpack-simple
```
3. Create a directory for your framer project
```bash
$ mkdir my-framerjs-project
$ cd my-framerjs-project
```
4. Initiate the generator
```bash
$ yo framerjs-webpack-simple
```
5. Customize your package.json(if needed)
6. Get live preview in browser before writing the code by:
```bash
$ npm run dev
```

# Distribute
```bash
$ npm run build
```

# Get the latest framer.js builds
Note that the `framer.js` file of this generator is built by `Niels van Hoorn` at `Wed Jul 19 16:32:27 2017`.

You can find the latest framer.js build at [http://builds.framerjs.com/](http://builds.framerjs.com/).

Or you can build your own framer.js: [https://github.com/koenbok/Framer](https://github.com/koenbok/Framer)

# History
**v1.1.3**
- removed `bower install` & polished webpack-config

**v1.1.2**
- fixed live preview bug in v1.1.1

**v1.1.1**
- fixed `index.html` build bug

**v1.1.0**
- support coffee script

**v1.0.0**

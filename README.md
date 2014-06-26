# generator-vanillajs [![Build Status](https://secure.travis-ci.org/stylinandy/generator-vanillajs.png?branch=master)](https://travis-ci.org/stylinandy/generator-vanillajs)

> A [Yeoman](http://yeoman.io) for an old school javascript web app. Word to your mother.

No AMD.  No frameworks.  Just simple Javascript.

## Usage

Install `generator-vanillajs`:
```
npm install -g generator-vanillajs
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```
Run `yo vanillajs` and follow the prompts.

Run `grunt server` for previewing and `grunt test` for unit testing.


## Generators

* [vanillajs:module](#module)

### Module
Generates a module in `app/scripts/modules`.

Example:
```bash
yo vanillajs:module FunkyMusic
```

Produces `app/scripts/modules/FunkyMusic.js`:

## Bower Components

The following packages are always installed by the [app](#app) generator:

* Bootstrap
* QUnit
* JQuery

## Testing

Running `grunt test` will open the QUnit test page.

## License

MIT
# What is this?

It's an example project that combines Typescript-based source files with a Rollup build system.  We want our bundles to be smaller and more robust with Rollup, but we also want to write our source code in Typescript.

# How to Use

Clone this repository, and using a terminal, run the following in the project root:

`npm install && npm run build`

See `package.json` for more information about these scripts, but it's essentially doing the following:

* Uses the [Typescript](https://github.com/Microsoft/TypeScript) compiler to convert Typescript to ES5 code + ES6 module statements (import/export).
* Uses [Rollup](https://github.com/rollup/rollup/) to bundle everything together into one JS file, eliminating unused code.
* Does a simple clean of the /dist directory with [Rimraf](https://github.com/isaacs/rimraf)

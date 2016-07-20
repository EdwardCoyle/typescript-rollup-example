import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'dist/tmp/main.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  sourceMap: true,
  sourceMapFile: 'dist/bundle.js.map',

  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
}

const gulp = require('gulp')

const initial = require('./gulp/initial')
const styles = require('./gulp/styles')
const script = require('./gulp/script')
const fonts = require('./gulp/fonts')
const imageMin = require('./gulp/imagemin')
const svgSprite = require('./gulp/svgSprite')
const clean = require('./gulp/clean')
const serve = require('./gulp/serve')
const lighthouse = require('./gulp/lighthouse')
 
// //const pug2html = require('./gulp/tasks/pug2html')
// const copyDependencies = require('./gulp/copyDependencies')
 

const paralellActions = gulp.parallel(initial, styles, script, fonts, imageMin, svgSprite)

module.exports.start = gulp.series(clean, paralellActions, serve)

module.exports.lighthouse = gulp.series(lighthouse)
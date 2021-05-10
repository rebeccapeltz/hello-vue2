# hello-vue2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Problem Trying to add Cloudinary Video

```bash
npm install -g @vue/cli
vue --version
# @vue/cli 4.5.13
vue create hello-vue2
cd hello-vue2
vue add cloudinary
```

a cloudinary.js file gets created
move it to `src` and include in `main.js`
run local `npm run serve`

error

```bash
> hello-vue2@0.1.0 serve
> vue-cli-service serve

 INFO  Starting development server...
 10% building 2/2 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/rebeccapeltz/projects/vue3/hello-vue2/public
ℹ ｢wds｣: 404s will fallback to /index.html
 98% after emitting CopyPlugin

 ERROR  Failed to compile with 11 errors                                                     2:47:00 PM

These dependencies were not found:

* @babel/runtime-corejs2/core-js/array/from in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/get-iterator in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/is-iterable in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/object/freeze in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/object/get-own-property-descriptor in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/object/get-own-property-descriptors in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/object/get-own-property-symbols in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/object/keys in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/symbol in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @babel/runtime-corejs2/core-js/symbol/iterator in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js
* @soda/get-current-script in ./node_modules/cloudinary-vue/dist/Cloudinary.umd.js

To install them, you can run: npm install --save @babel/runtime-corejs2/core-js/array/from @babel/runtime-corejs2/core-js/get-iterator @babel/runtime-corejs2/core-js/is-iterable @babel/runtime-corejs2/core-js/object/freeze @babel/runtime-corejs2/core-js/object/get-own-property-descriptor @babel/runtime-corejs2/core-js/object/get-own-property-descriptors @babel/runtime-corejs2/core-js/object/get-own-property-symbols @babel/runtime-corejs2/core-js/object/keys @babel/runtime-corejs2/core-js/symbol @babel/runtime-corejs2/core-js/symbol/iterator @soda/get-current-script
```

# hot-reloading

I was working on adding hot reloading to [Cloudify-Stage](https://github.com/cloudify-cosmo/cloudify-stage) repository.
Because I initially failed to do it, maybe because Cloudify-Stage is a large project and have a [multiple webpack configuration](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations).
I created this repository - to create hot reloading in a small project.
* I used the same versions of `webpack`, `webpack-cli`, `webpack-dev-server`, `babel-loader`, `html-webpack-plugin` as in Cloudify-Stage.
* I created  [multiple webpack configuration](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations) in this project.

[![Demo](https://user-images.githubusercontent.com/17104212/142770058-f631f846-27fb-45a5-80b3-e830c3f60167.png)](https://vimeo.com/648290062 "Hot Reloading with Multiple Webpack Configuration")

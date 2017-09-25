Client Name
================

##Getting Started
1. Install Bundler: `gem install bundler`
2. Install dependencies: `bundle install`
3. Install Node packages: `npm install`
4. Install components: `bower install`

##Daily Startup
1. `cd` to project directory
2. Start environment: `gulp`
3. Navigate to [http://localhost:9999/](http://localhost:9999/)


============

###Mirror this template:
New repository must be created prior

https://help.github.com/articles/duplicating-a-repository/

Create a bare clone

`git clone --bare git@bitbucket.org:ocupop/jekyll-project.git`

Push mirror to new repository

```
cd jekyll-project.git
git push --mirror git@bitbucket.org:ocupop/bittercube
```

Remove temporary local instance

``` 
cd ../
rm -rf jekyll-project.git
git clone git@bitbucket.org:ocupop/bittercube
```


From issue: https://github.com/thlorenz/browserify-shim/issues/46

If this helps anyone, I used the following to be able to include jQuery from a CDN but still have the ability to use require('jquery') in CommonJS modules via Globals

package.json

"browser": {
        "jquery": "./client/src/js/jquery_shim.js"
    },
"browserify": {
    "transform": [
        "browserify-shim"
    ]
},
"browserify-shim": {
    "jquery": "global:jQuery"
}
jquery_shim.js

module.exports = require('jquery');
index.html

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/js/bundle.js"></script>
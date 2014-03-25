# get-path [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/get-path&title=get-path&description=hughsk/get-path%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Cross-platform means of getting the PATH environment variable name, which seems
to be consistent everywhere but Windows.

## Usage ##

[![get-path](https://nodei.co/npm/get-path.png?mini=true)](https://nodei.co/npm/get-path)

### getPath([env], [platform]) ###

Returns the key to use when querying `process.env` for its `PATH`, e.g.:

``` javascript
var getPath = require('get-path')
var pathKey = getPath()
var PATH = process.env[pathKey]
```

Optionally, you can pass in your own `env` object to use in place of
`process.env`, and your own `platform` string to use in place of
`process.platform`.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/get-path/blob/master/LICENSE.md) for details.

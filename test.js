var getPath = require('./')
var test = require('tape')

test('simple check: variable is present', function(t) {
  t.ok(getPath(), 'returns key')
  t.ok(process.env[getPath()], 'key exists in env')
  t.end()
})

test('windows: approximate paths', function(t) {
  t.equal(getPath({
    PATH: true
  }, 'win32'), 'PATH', 'PATH')

  t.equal(getPath({
    Path: true
  }, 'win32'), 'Path', 'Path')

  t.equal(getPath({
    path: true
  }, 'win32'), 'path', 'path')

  t.equal(getPath({
      Path: true
    , PATH: true
  }, 'win32'), 'Path', 'Path vs. PATH')

  t.end()
})

module.exports = getPath

function getPath(env, platform) {
  platform = platform || process.platform
  env = env || process.env

  if (platform !== 'win32') return 'PATH'
  if (env.Path) return 'Path'

  // According to npm, "windows calls it's path
  // 'Path' usually, but this is not guaranteed."
  // See: http://git.io/JjGbaw
  var PATH = 'Path'

  Object.keys(env).forEach(function(key) {
    if (key.toLowerCase() === 'path') PATH = key
  })

  return PATH
}

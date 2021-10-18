import myDecorateHyper from './core/Container'

exports.reduceUI = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('hyperWallpaper', config.hyperWallpaper)
    }
    default:
      break
  }
  return state
}

exports.mapHyperState = (state, map) => {
  return Object.assign({}, map, {
    hyperWallpaper: state.ui.hyperWallpaper || {}
  })
}

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#00000000',
  });
}

exports.decorateHyper = myDecorateHyper

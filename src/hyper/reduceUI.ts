const reduceUI = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('hyperWallpaper', config.hyperWallpaper);
    }
    default:
      break;
  }
  return state;
};

export default reduceUI;

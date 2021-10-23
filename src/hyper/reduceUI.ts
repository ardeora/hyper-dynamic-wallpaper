const reduceUI = (state, { type, config }) => {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('wallpapers', config.wallpapers);
    }
    default:
      break;
  }
  return state;
};

export default reduceUI;

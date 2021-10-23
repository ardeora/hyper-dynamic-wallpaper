const mapHyperState = (state, map) => {
  return Object.assign({}, map, {
    wallpapers: state.ui.wallpapers || {},
  });
};

export default mapHyperState;

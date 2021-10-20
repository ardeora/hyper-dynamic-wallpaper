const mapHyperState = (state, map) => {
  return Object.assign({}, map, {
    hyperWallpaper: state.ui.hyperWallpaper || {},
  });
};

export default mapHyperState;

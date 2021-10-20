const decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#00000000',
    css: '',
  });
};

export default decorateConfig;

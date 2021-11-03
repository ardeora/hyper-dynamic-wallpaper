# Hyper Wallpaper

<div style="text-align: center; margin-bottom: 16px;">
<img src="https://img.shields.io/npm/v/hyper-dynamic-wallpaper.svg?style=flat"/>
<img alt="npm" src="https://img.shields.io/npm/dt/hyper-dynamic-wallpaper">


Add Video, GIF, Gradient, Image Backgrounds To Hyper Terminal
</div>

<video style="width: 100%;" autoPlay loop muted>
    <source src="https://github.com/ardeora/hyper-dynamic-wallpaper/blob/main/docs/assets/preview.mov?raw=true"/>
</video>

## Install
To set up the project for development:

1. Clone this repository into `~/.hyper_plugins/local/`
2. Run `yarn install` or `npm install` within the project directory
3. Run `yarn run build` or `npm run build` to build the plugin.
4. Add the name of the directory to `localPlugins` in `~/.hyper.js` like so:
```js
localPlugins: [
  'hyper-dynamic-wallpaper'
],
```
5. Reload terminal window
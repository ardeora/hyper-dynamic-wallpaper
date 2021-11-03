# Hyper Wallpaper

<div style="text-align: center; margin-bottom: 16px;">
<img src="https://img.shields.io/npm/v/hyper-dynamic-wallpaper.svg?style=flat"/>
<img alt="npm" src="https://img.shields.io/npm/dt/hyper-dynamic-wallpaper">
</div>

<br>

Add Video, GIF, Gradient, Image Backgrounds To Hyper Terminal

https://user-images.githubusercontent.com/45807386/140005969-b3c7c26a-18d0-4bea-8c24-218cef5eb0cf.mov

## Install
To install `hyper-dynamic-wallpaper`:

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

## Configuring Wallpapers
To add custom wallpapers add a `wallpapers` object in `~/.hyper.js` like so:
```js
config: {
  // ...Hyper config
  wallpapers: {}
}
```

### Video Wallpapers
```js
config: {
  // ...Hyper config
  wallpapers: {
    video: VideoConfig | VideoConfig[]
  }
}
```
#### `VideoConfig` Options
| Property | Required | Default Value | Description                 |
|----------|----------|---------------|-----------------------------|
| source   | yes      |       -       | Local path or link to video |
| speed    | no       | 1             | Video Speed                 |

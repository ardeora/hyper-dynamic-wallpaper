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


<details>
  <summary>Video Wallpapers</summary>
  
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

  
  #### Examples: Video Wallpaper Config
  
  ##### Single Video Wallpaper
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: {
        source: '/Users/aryandeora/Desktop/Downloads/aurora.mp4',
        speed: 1
      }
    }
  }
  ```
  
  ##### Multiple Video Wallpapers
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: [
        {
          source: '/Users/aryandeora/Desktop/Downloads/aurora.mp4',
        },
        {
          source: 'https://cdn.dribbble.com/users/288987/screenshots/15269498/media/3e7d1d6ca30d7793f72168cb99d6e5b8.mp4',
          speed: 0.8
        }
      ]
    }
  }
  ```
</details>

<details>
  <summary>Image Wallpapers</summary>
  
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: ImageConfig | ImageConfig[]
    }
  }
  ```
  #### `ImageConfig` Options
  | Property | Required | Default Value | Description                        |
  |----------|----------|---------------|------------------------------------|
  | source   | yes      |       -       | Local path or link to image        |
  | repeat   | no       | `no-repeat`   | CSS [`background-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) property   |
  | color    | no       | `black`       | CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) property    |
  | position | no       | `center`      | CSS [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) property |
  | size     | no       | `cover`       | CSS [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) property     |

  
  #### Examples: Video Wallpaper Config
  
  ##### Single Video Wallpaper
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: {
        source: '/Users/aryandeora/Desktop/Downloads/aurora.mp4',
        speed: 1
      }
    }
  }
  ```
  
  ##### Multiple Video Wallpapers
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: [
        {
          source: '/Users/aryandeora/Desktop/Downloads/aurora.mp4',
        },
        {
          source: 'https://cdn.dribbble.com/users/288987/screenshots/15269498/media/3e7d1d6ca30d7793f72168cb99d6e5b8.mp4',
          speed: 0.8
        }
      ]
    }
  }
  ```
</details>

# Hyper Wallpaper

<div style="text-align: center; margin-bottom: 16px;">
  <img src="https://img.shields.io/npm/v/hyper-dynamic-wallpaper.svg?style=for-the-badge"/>
  <img alt="npm" src="https://img.shields.io/npm/dt/hyper-dynamic-wallpaper?style=for-the-badge">
  <a href="https://hyper.is/">
    <img src="https://img.shields.io/badge/made%20for-Hyper Terminal-F97588?logo=hyper&style=for-the-badge">
  </a>
</div>

<br>

Add Video, GIF, Gradient, Image Backgrounds To Hyper Terminal

https://user-images.githubusercontent.com/45807386/140631214-889fffad-b416-42f3-afad-5d7654f747a6.mov


## Install
To install `hyper-dynamic-wallpaper`:

### Method 1: Download Release
1. Download the [latest release](https://github.com/ardeora/hyper-dynamic-wallpaper/releases/download/1.0.1/hyper-dynamic-wallpaper.zip)
2. Unzip the file and place the `hyper-dynamic-wallpaper` folder in `~/.hyper_plugins/local/`

### Method 2: Repository Clone
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

## Controls
##### MacOS
  1. Press `Command + U` for next wallpaper
  2. Press `Command + I` for previous wallpaper   
##### Windows
  1. Press `Shift + Ctrl + U` for next wallpaper
  2. Press `Shift + Ctrl + I` for previous wallpaper   

## Configuring Wallpapers
To add custom wallpapers add a `wallpapers` object in `~/.hyper.js` like so:
```js
config: {
  // ...Hyper config
  wallpapers: {}
}
```

Look at specific wallpaper sections below for more information on how to add different backgrounds.

<details>
  <summary>Video Wallpapers</summary>

  ## Video Wallpapers

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
        speed: 1,
        // Opacity of the hyper window, 0 is completely opaque, Available: 0 - 10
        maskAlpha: 7,
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

  ## Image Wallpapers
  
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      image: ImageConfig | ImageConfig[]
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

  
  #### Examples: Image Wallpaper Config
  
  ##### Single Image Wallpaper
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      image: {
        source: '/Users/aryandeora/Desktop/Downloads/image.gif',
      }
    }
  }
  ```
  
  ##### Multiple Image Wallpapers
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      image: [
        {
          source: '/Users/aryandeora/Desktop/Downloads/image.png',
        },
        {
          source: 'https://lh3.googleusercontent.com/proxy/pVwXyJdsROLTGHwWQmiPH4xEj-ZE1VjlAJbQN9jAYprMD7QV4R25AFoyFq2Cn0yhKnzCCTKw2lgffd4yeUxUQGljk6IhZqo',
          position: '90% 50%',
          size: '35%',
          color: '#08103a'
        }
      ]
    }
  }
  ```
</details>

<details>
  <summary>Gradient Wallpapers</summary>

  ## Gradient Wallpapers
  
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      gradient: GradientConfig | GradientConfig[]
    }
  }
  ```
  #### `GradientConfig` Options
  | Property | Required | Default Value | Description                        |
  |----------|----------|---------------|------------------------------------|
  | colors           | yes      |       -       | List of colors in the gradient        |
  | gradientAngle    | no       | 270       | Gradient direction in degrees |
  | animationTime    | no       | 0   | CSS [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) property   |
  | timingFunction   | no       | `linear`      | CSS [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) property |
  

  
  #### Examples: Gradient Wallpaper Config
  
  ##### Single Gradient Wallpaper
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      gradient: {
        colors: ['#F17C58', '#E94584', '#24AADB' , '#27DBB1','#FFDC18', '#FF3706'],
        animationTime: 30,
        timingFunction: 'linear',
        gradientAngle: 270
      }
    }
  }
  ```
  
  ##### Multiple Gradient Wallpapers
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      gradient: [
        {
          colors: ['#F17C58', '#E94584', '#24AADB' , '#27DBB1','#FFDC18', '#FF3706'],
          animationTime: 30,
          timingFunction: 'linear',
          gradientAngle: 270
        },
        {
          colors: ['#421F41', '#0475A2'],
          animationTime: 5,
          timingFunction: 'linear',
          gradientAngle: 270
        }
      ]
    }
  }
  ```
</details>

<details>
  <summary>Solid Color Wallpapers</summary>

  ## Solid Color Wallpapers
  
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      solid: SolidColorConfig | SolidColorConfig[]
    }
  }
  ```
  #### `SolidColorConfig` Options
  | Property | Required | Default Value | Description                        |
  |----------|----------|---------------|------------------------------------|
  | color    | yes      |       -       | Background        |
  
  #### Examples: Solid Color Wallpaper Config
  
  ##### Single Solid Color Wallpaper
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      solid: {
        color: 'hotpink',
      }
    }
  }
  ```
  
  ##### Multiple Solid Color Wallpapers
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      solid: [
        {
          color: 'hotpink',
        },
        {
          color: '#421F41',
        }
      ]
    }
  }
  ```
</details>

<details>
  <summary>Mixed Wallpapers</summary>

  ## Mixed Wallpapers
  
  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      video: VideoConfig | VideoConfig[],
      image: ImageConfig | ImageConfig[],
      gradient: GradientConfig | GradientConfig[],
      solid: SolidColorConfig | SolidColorConfig[]
    }
  }
  ```
  Multiple wallpaper types can be mixed together in the same config like so:

  ```js
  config: {
    // ...Hyper config
    wallpapers: {
      solid: {
        color: '#421F41',
      },
      video: [{
          source: '/Users/aryandeora/Desktop/Downloads/aurora.mp4',
          speed: 1
        }
      ]
      image: [
        {
          source: '/Users/aryandeora/Desktop/Downloads/image.png',
        },
        {
          source: 'https://lh3.googleusercontent.com/proxy/pVwXyJdsROLTGHwWQmiPH4xEj-ZE1VjlAJbQN9jAYprMD7QV4R25AFoyFq2Cn0yhKnzCCTKw2lgffd4yeUxUQGljk6IhZqo',
          position: '90% 50%',
          size: '35%',
          color: '#08103a'
        }
      ]
    }
  }
  ```
</details>

import React, { Component } from 'react';

import HyperWallpaper from './HyperWallpaper';

export default function (Hyper) {
  return class HyperContainer extends Component {
    render() {
      return (
        <>
          <HyperWallpaper
            // @ts-expect-error The props are received from outside the plugin environment and
            // and hence typescript complains about them
            config={this.props.hyperWallpaper}
          />
          <Hyper {...this.props} />
        </>
      );
    }
  };
}

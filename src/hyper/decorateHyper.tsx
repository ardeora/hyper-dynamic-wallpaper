import React, { Component } from 'react';
import HyperWallpaper from '../components/HyperWallpaper';
import { PLUGIN_NAME } from '../utils/constants';
import { HOCState, HOCProps } from '../types/wallpaper';
import { flattenConfig } from '../utils/util';

export default function (Hyper) {
  return class HyperContainer extends Component<HOCProps, HOCState> {
    constructor(props) {
      super(props);
      console.log('YOOO', flattenConfig(this.props.hyperWallpaper));

      this.state = {
        configList: flattenConfig(this.props.hyperWallpaper),
        configIdx: 0,
      };

      this.nextWallpaper = this.nextWallpaper.bind(this);
    }

    componentDidMount() {
      window.rpc.on(`${PLUGIN_NAME}:next`, this.nextWallpaper);
    }

    nextWallpaper() {
      const { configList } = this.state;
      this.setState((prevState) => {
        return {
          configIdx: configList.length - 1 === prevState.configIdx ? 0 : prevState.configIdx + 1,
        };
      });
    }

    render() {
      const { configList, configIdx } = this.state;
      return (
        <>
          <HyperWallpaper config={configList[configIdx]} />
          <Hyper {...this.props} />
        </>
      );
    }
  };
}

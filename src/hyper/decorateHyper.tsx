import React, { Component } from 'react';
import HyperWallpaper from '../components/HyperWallpaper';
import { PLUGIN_NAME } from '../utils/constants';
import { HOCState, HOCProps } from '../types/wallpaper';
import { flattenConfig } from '../utils/util';

export default function (Hyper) {
  return class HyperContainer extends Component<HOCProps, HOCState> {
    constructor(props) {
      super(props);

      this.state = {
        configList: flattenConfig(this.props.hyperWallpaper),
        configIdx: 0,
      };

      this.nextWallpaper = this.nextWallpaper.bind(this);
      this.previousWallpaper = this.previousWallpaper.bind(this);
    }

    componentDidMount() {
      window.rpc.on(`${PLUGIN_NAME}:next`, this.nextWallpaper);
      window.rpc.on(`${PLUGIN_NAME}:previous`, this.previousWallpaper);
    }

    componentWillUnmount() {
      window.rpc.removeListener(`${PLUGIN_NAME}:next`, this.nextWallpaper);
      window.rpc.removeListener(`${PLUGIN_NAME}:previous`, this.previousWallpaper);
    }

    componentDidUpdate(prevProps) {
      const prevPropsStr = JSON.stringify(prevProps.hyperWallpaper);
      const currPropsStr = JSON.stringify(this.props.hyperWallpaper);
      if (prevPropsStr !== currPropsStr) {
        this.setState({
          configList: flattenConfig(this.props.hyperWallpaper),
          configIdx: 0,
        });
      }
    }

    nextWallpaper() {
      const { configList } = this.state;
      this.setState((prevState) => {
        return {
          configIdx: configList.length - 1 === prevState.configIdx ? 0 : prevState.configIdx + 1,
        };
      });
    }

    previousWallpaper() {
      const { configList } = this.state;
      this.setState((prevState) => {
        return {
          configIdx: prevState.configIdx === 0 ? configList.length - 1 : prevState.configIdx - 1,
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

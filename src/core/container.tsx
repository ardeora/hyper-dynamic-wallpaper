import React, { Component } from 'react'

import HyperWallpaper from './HyperWallpaper'

export default function (Hyper) {
    return class extends Component {

        render() {
            return (
                <>
                    < HyperWallpaper
                        // @ts-expect-error
                        config={this.props.hyperWallpaper} />
                    <Hyper {...this.props} />
                </>
            )
        }
    }
}
import React, { Component } from 'react'

import HyperToolbar from './HyperToolbar'

export default function (Hyper) {
    return class extends Component {

        render() {
            // @ts-expect-error
            const config = window.config.getConfig()
            const customChildren = (
                <div>
                    < HyperToolbar  {...this.props} myConfig={config} />
                </div>
            )

            return <Hyper {...this.props} customChildren={customChildren} />
        }
    }
}
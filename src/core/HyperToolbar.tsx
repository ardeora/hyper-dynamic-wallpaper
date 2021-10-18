import React, { FC, useEffect, useState } from 'react'

const HyperToolbar: FC<{ myConfig }> = (props) => {
    console.log(props)

    let [time, setTime] = useState<number>(Date.now())

    useEffect(() => {
        setInterval(() => {
            setTime(Date.now())
        }, 1000000)
    }, [])

    return (
        <div style={{
            position: 'absolute',
            overflow: 'hidden',
            bottom: 0,
            width: '100%',
            height: '30px',
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(3px)'
        }}>
            {/* {time} */}
        </div>
    )
}


export default HyperToolbar
import React from 'react'
import { useSelector } from 'react-redux'
function Description() {
    const data = useSelector((state) => state.showData.data);
    console.log(data)
    return (
        <div>{data}</div>
    )
}

export default Description
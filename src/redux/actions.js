export const increment = () => {
    return ({
        type: "INCREMENT"
    })
}
export const decrement = () => {
    return ({
        type: "DECREMENT"
    })
}
export const video = (videoRef) => {
    return {
        type: "VIDEO",
        video: videoRef
    }
}
export const showPopUp = (data) => {
    return {
        type: "POPUP",
        payload: data
    }
}
export const blockClick = (data, index) => {
    return {
        type: "BLOCKCLICK",
        payload: {
            data: data,
            index: index
        }
    }
}

export const GameOver = (win) => {
    return {
        type: "ENDGAME",
        payload: win
    }
}
// export const turnAction = (val) => {
//     return {
//         type: "TURN",
//         val: val
//     }
// }
export const restart = (arr) => {
    return {
        type: "RESTART",
        payload: arr
    }
}
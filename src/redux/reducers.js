import React, { useRef } from 'react';
let int = {
    count: 1
}
const upAndDown = (state = int, action) => {
    // return {
    // }
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            if (state.count <= 0) {
                alert("you cant take value less then 0")
                return { count: 0 }
            }
            return { count: state.count - 1 }
        default: return state
    }
}

export const showData = (state = { data: "click for showing data" }, action = null) => {
    switch (action.type) {
        case "POPUP":
            return {
                data: action.payload
            }
        default: return state
    }

}
export const xandy = (state = new Array(9).fill(""), action) => {
    switch (action.type) {
        /// add element
        case "BLOCKCLICK":

            const index = action?.payload.index;
            const data = action?.payload.data
            if (state.arr[index] === "") {
                state.arr[index] = data
            }
            // console.log("reduer hit")
            // console.log(state.arr)

            return {
                arr: [...state.arr]
            }

        // game over and sed result
        case "ENDGAME":
            console.log(state)
            const queue = [...state.arr];
            // console.log(action.payload)
            // console.log(queue, "<<<<<<<<<<<<<<<<")
            const winner = action?.payload;
            // console.log(winner, "}}}}}}}}}}}}}}")
            const sendResult = win => {
                return {
                    result: win,
                    arr: [...state.arr]
                }
            }

            const checkResult = (p1, p2, p3) => {
                if (queue[p1] !== "" && queue[p2] !== "" && queue[p3] !== "") {
                    if ((queue[p1] + queue[p2] + queue[p3]) === "XXX"
                        || (queue[p1] + queue[p2] + queue[p3]) === "OOO") {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }

            if (checkResult(0, 1, 2)) {
                console.log("ONE WIN")
                return sendResult(winner);

            } else if (checkResult(3, 4, 5)) {
                console.log("ONE 2")

                return sendResult(winner)

            } else if (checkResult(6, 7, 8)) {
                console.log("ONE 3")

                return sendResult(winner)

            } else if (checkResult(0, 3, 6)) {
                console.log("ONE 4")

                return sendResult(winner)

            } else if (checkResult(1, 4, 7)) {
                console.log("ONE 5")

                return sendResult(winner)

            } else if (checkResult(2, 5, 8)) {
                console.log("ONE 6")

                return sendResult(winner)

            } else if (checkResult(0, 4, 8)) {
                console.log("ONE 7")

                return sendResult(winner)

            } else if (checkResult(2, 4, 6)) {
                console.log("ONE 8")

                return sendResult(winner)

            } else if (!queue.includes("")) {
                return sendResult("draw")

            } else {
                return sendResult("pending")
            }

        case "RESTART": {
            return {
                arr: action.payload,
                result: "pending"
            }
        }
        default:
            return { arr: state, result: "pending" }
    }
}
export { upAndDown }
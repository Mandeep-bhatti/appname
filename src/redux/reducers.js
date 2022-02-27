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
export { upAndDown }
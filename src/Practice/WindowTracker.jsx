import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function WatchWindowWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", WatchWindowWidth)
        return () => {
            window.removeEventListener("resize", WatchWindowWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
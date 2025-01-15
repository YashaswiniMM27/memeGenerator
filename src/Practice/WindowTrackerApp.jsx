import { useState } from "react"
import WindowTracker from "./WindowTracker"
import './Window.css'

export default function WindowTrackerApp() {
    
    const [show, setShow] = useState(true)
    
    function ToggleShow(){
        setShow(prevShow => !prevShow)
    }

    return (
        <main className="container">
            <button onClick={ToggleShow}>
                Toggle WindowTracker
            </button >
            {show && <WindowTracker />}
        </main>
    )
}
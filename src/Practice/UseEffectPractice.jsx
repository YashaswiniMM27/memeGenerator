import {useEffect, useState} from "react"

export default function UseEffect() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    },[count])

    return (
        <div>
            <h2>The Character is: </h2>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
        </div>
    )
}
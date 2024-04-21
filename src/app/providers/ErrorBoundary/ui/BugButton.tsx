import { useEffect, useState } from 'react'

export default function BugButton() {
    const [error, setError] = useState(false)

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <button onClick={onThrow}>
            error
        </button>
    )
}
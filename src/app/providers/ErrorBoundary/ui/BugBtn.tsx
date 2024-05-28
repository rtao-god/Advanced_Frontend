import Btn from '@/shared/ui/Btn/Btn'
import { useEffect, useState } from 'react'

export default function BugBtn() {
    const [error, setError] = useState(false)

    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return <Btn onClick={onThrow}>error</Btn>
}

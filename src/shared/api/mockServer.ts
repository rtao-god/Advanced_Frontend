export const getPosts = async () => {
    const response = await fetch('/api/posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    return await response.json()
}

export const updateCounter = async (id: number, counter: number) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ counter })
    })
    if (!response.ok) throw new Error('Failed to update counter')
    return await response.json()
}

import classNames from '@/shared/lib/helpers/classNames'
import cls from './PostsList.module.scss'
import PostsListProps from './types'
import { useGetPostsQuery, useUpdateCounterMutation } from '@/shared/api'
import { useState } from 'react'
import { Btn, Row, Text, Form, SubmitButton, TextInput, FormField } from '@/shared/ui'

export default function PostsList({ className }: PostsListProps) {
    const { data: posts, error, isLoading } = useGetPostsQuery()

    const [updateCounter] = useUpdateCounterMutation()
    const [counters, setCounters] = useState<{ [key: number]: number }>({})

    const handleUpdateCounter = (id: number) => {
        const newCounter = (counters[id] || 0) + 1
        setCounters({ ...counters, [id]: newCounter })
        updateCounter({ id, counter: newCounter })
    }

    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})

    const handleFormSubmit = (data: any) => {
        const newErrors = validateForm(data)
        if (Object.keys(newErrors).length === 0) {
            setFormData(data)
        } else {
            setErrors(newErrors)
        }
    }

    const validateForm = (data: any) => {
        const errors: any = {}
        if (!data.name) errors.name = 'Name is required'
        if (!data.email) errors.email = 'Email is required'
        return errors
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {(error as any).message}</div>

    return (
        <div className={classNames(cls.Posts_list, {}, [className ?? ''])}>
            <Form onSubmit={handleFormSubmit}>
                <FormField label='Name' name='name' error={errors.name}>
                    <TextInput name='name' placeholder='Enter your name' />
                </FormField>
                <FormField label='Email' name='email' error={errors.email}>
                    <TextInput name='email' placeholder='Enter your email' />
                </FormField>
                <SubmitButton label='Submit' />
            </Form>
            {formData && (
                <div className='form-data'>
                    <h3>Submitted Data:</h3>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
            {posts.map((post: any) => (
                <div className={cls.post} key={post.id}>
                    <Text type='h3'>{post.title}</Text>
                    <Text type='p'>{post.body}</Text>
                    <Row gap={20}>
                        <Btn onClick={() => handleUpdateCounter(post.id)}>Increment</Btn>
                        <Text type='p'>Counter: {counters[post.id] || 0}</Text>
                    </Row>
                </div>
            ))}
        </div>
    )
}

import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
import classNames from '@/shared/lib/helpers/classNames'
import Layout from '../Layout/Layout'
import { useEffect, useState } from 'react'

interface AboutPageProps  {
    className?: string
}

export default function AboutPage({ className }: AboutPageProps) {
    const { t } = useTranslation('about')
    /*    function foo() {
        const x = 10
        return {
            x: 20,
            bar: () => {
                console.log(this.x)
            },
            baz: function () {
                console.log(this.x)
            }
        }
    }

    const obj1 = foo()
    obj1.bar() // ? 10
    obj1.baz() // ? 20

    const obj2 = foo.call({ x: 30 })
    let y = obj2.bar
    let z = obj2.baz
    y() // ?
    z() // ?

    obj2.bar() // ?
    obj2.baz() // ? */

    const [data, setData] = useState(null)

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json.title))
            .catch(error => new Error('Error ', error))

    return (
        <Layout>
            <div className={classNames(cls.AboutPage, {}, [className ?? ''])}>{data}</div>
        </Layout>
    )
}

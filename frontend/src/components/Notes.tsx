import React, { useEffect } from 'react';

interface Idata {
    id: string,
    body: string,
    updated: string,
    created: string,
}

interface Inotes {
    title: string,
    content: string,
}

export default function Notes() {
    const [notes, setNotes]: [Inotes[], Function] = React.useState([
        {
            'title': 'Loading...',
            'content': 'Loading...',
        }
    ])
    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        let data = await fetch('/api/notes/')
        let json_data = await data.json()
        let notes: Inotes[] = []
        json_data.forEach((item: Idata) => {
            notes.push({
                'title': item.body.slice(0, 20) + '...',
                'content': item.body,
            })
        }
        )
        setNotes(notes)
    }

    const temp_img = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    return (

        <div className="my-10 container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
            <ul className="flex flex-col divide-y divide">
                {
                    notes.map((item, index) => {
                        return (
                            <li key={index} className="flex flex-row">
                                <div className="m-auto mt-4 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                                    <a href="/" className="block w-full h-full">
                                        <img alt="blog" src={temp_img} className="object-cover w-full max-h-40" />
                                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                                            <p className="font-medium text-indigo-500 text-md">
                                                AUTHOR
                                            </p>
                                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                                {item.title}
                                            </p>
                                            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                                {item.content}
                                            </p>
                                        </div>
                                    </a>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}
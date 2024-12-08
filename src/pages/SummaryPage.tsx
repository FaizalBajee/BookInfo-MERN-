import React, { useEffect, useState } from 'react'
import { summaryModel } from '../models/summaryModel'
import axios, { AxiosResponse } from 'axios';
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const SummaryPage: React.FC = () => {
    const [books, setBooks] = useState<summaryModel[]>([]);
    useEffect(() => {
        axios.get(`${REACT_APP_BASE_URL}/summary`)
            .then((res: AxiosResponse) => {
                setBooks(res.data.content);
                console.log(books)
            })
            .catch((error) => console.log("error handling : ", error))
    }, []);
    return (
        <div className="flex justify-center flex-col mt-20 m-20 ">
            <div>
                <h1>Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 border-2 border-blue-500 rounded-lg p-6 w-full h-40"
                        >
                            <h2 className="text-lg font-bold text-gray-800">{book.bookName}</h2>
                            <h3 className="text-md text-blue-600">{book.authorName}</h3>
                            <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-600">No data available</p>
                )}
            </div>
        </div>


    )
}

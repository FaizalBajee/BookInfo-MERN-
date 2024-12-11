import React, { useEffect, useState } from 'react'
import { summaryModel } from '../models/summaryModel'
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const SummaryPage: React.FC = () => {
    const [books, setBooks] = useState<summaryModel[]>([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${REACT_APP_BASE_URL}/summary`)
            .then((res: AxiosResponse) => {
                setBooks(res.data.content);
                console.log(books)
            })
            .catch((error) => console.log("error handling : ", error))
    }, []);

    const handleRemove = (id: string) => {
        console.log(id)
        axios.delete(`${REACT_APP_BASE_URL}/remove?id=${id}`)
            .then((res: AxiosResponse) => {
                if (!res.data.success) {
                    return alert(res.data.message);
                }
                let updatedArray = books.filter((books) => books._id !== id)
                setBooks(updatedArray);
                alert(res.data.message);
            })
            .catch((error) => console.log(`error handling : ${error}`))
    }

    return (
        <div className="flex justify-center flex-col mt-10 m-10 ">
            <div className='flex justify-center m-10'>
                <h1 className='text-4xl font-semibold'>Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div
                            key={index}
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"
                        >
                            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{book.bookName}</h2>
                            <h3 className="text-md text-blue-600">{book.authorName}</h3>
                            <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>

                            <div className="flex items-center justify-between">
                                {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}
                                <button onClick={() => handleRemove(book._id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-600">No data available</p>
                )}
            </div>
            <button onClick={() => navigate("/uploadPage")} className=" m-20 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                upload books
            </button>

        </div>


    )
}

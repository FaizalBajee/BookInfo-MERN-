import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react'
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

export const UploadPage: React.FC = () => {
    const [bname, setBname] = useState<string | undefined>();
    const [aname, setAname] = useState<string | undefined>();
    const [des, setDes] = useState<string | undefined>();
    const handleSave = () => {
        console.log(bname, "  :  ", aname, "  :  ", des);

        axios.post(`${REACT_APP_BASE_URL}/uploadBooks`, {
            bname,
            aname,
            des
        })
            .then((res: AxiosResponse) => {
                alert(res.data.message)
            })
            .catch((error) => console.log("error .. :", error))
    }
    return (
        <div className='flex items-center flex-col space-y-5  mt-20 '>
            <div>
                <h1 className='text-xl font-semibold'>Upload Books</h1>
            </div>
            <div className='flex flex-col space-y-4'>
                <input
                    className='max-w-40 border-2 border-gray-300 rounded'
                    placeholder='Book name'
                    onChange={(value: ChangeEvent<HTMLInputElement>) => setBname(value.target.value)}
                ></input>
                <input
                    className='max-w-40 border-2 border-gray-300 rounded'
                    placeholder='Author name'
                    onChange={(value: ChangeEvent<HTMLInputElement>) => setAname(value.target.value)}
                ></input>
                <input
                    className='max-w-40 border-2 border-gray-300 rounded'
                    placeholder='Description'
                    onChange={(value: ChangeEvent<HTMLInputElement>) => setDes(value.target.value)}
                ></input>
                <button
                    onClick={handleSave}
                    className='bg-blue-500 rounded text-white focus:ring-2 focus:ring-blue-300'>
                    Save
                </button>
            </div>
        </div>
    )
}

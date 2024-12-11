import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

export const UploadPage: React.FC = () => {
    const [bname, setBname] = useState<string | undefined>();
    const [aname, setAname] = useState<string | undefined>();
    const [des, setDes] = useState<string | undefined>();
    const navigator = useNavigate();
    const handleSave = () => {
        console.log(bname, "  :  ", aname, "  :  ", des);

        axios.post(`${REACT_APP_BASE_URL}/uploadBooks`, {
            bname,
            aname,
            des
        })
            .then((res: AxiosResponse) => {
                alert(res.data.message)
                setAname('');
                setBname('');
                setDes('');
                navigator('/summary')
            })
            .catch((error) => console.log("error .. :", error))
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-sm w-full">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold text-gray-800">Upload Books</h1>
                </div>
                <div className="flex flex-col space-y-4">
                    <input
                        className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        placeholder="Book name"
                        onChange={(value: ChangeEvent<HTMLInputElement>) => setBname(value.target.value)}
                    />
                    <input
                        className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        placeholder="Author name"
                        onChange={(value: ChangeEvent<HTMLInputElement>) => setAname(value.target.value)}
                    />
                    <input
                        className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        placeholder="Description"
                        onChange={(value: ChangeEvent<HTMLInputElement>) => setDes(value.target.value)}
                    />
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 rounded text-white py-2 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
                        Save
                    </button>
                </div>
            </div>
        </div>

    )
}

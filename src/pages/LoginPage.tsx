import React, { ChangeEvent, useEffect, useState } from 'react'
import axios, { AxiosResponse } from "axios";
import { useNavigate } from 'react-router-dom';
import { responseModel } from '../models/responseModel';
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

export const LoginPage: React.FC = () => {
    const [userName, setUserName] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const navigate = useNavigate()
    useEffect(() => {

    }, [])
    const handleLogin = () => {
        if (!userName || !password) {
            return alert("Fill the missing fields ")
        }
        console.log(userName, "  :  ", password)

        axios.get(REACT_APP_BASE_URL + `/login?name=${userName}&password=${password}`)
            .then((res: AxiosResponse) => {
                if (!res.data.success) {
                    return alert(res.data.message)
                }
                navigate("/summary")
                console.log("Response:", res.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });


    }

    return (
        <div className="flex flex-col items-center justify-center space-y-6 mt-6">
            <div>
                <h3 className="text-xl font-semibold">ABC Groups</h3>
            </div>
            <div className="flex flex-col space-y-4 w-full max-w-sm">
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="User Name"
                    onChange={(value: ChangeEvent<HTMLInputElement>) => setUserName(value.target.value)}
                />
                <input
                    type="password"
                    className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                    onChange={(value: ChangeEvent<HTMLInputElement>) => setPassword(value.target.value)}
                />
            </div>
            <div>
                <button
                    className="text-xl font-semibold px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );

}

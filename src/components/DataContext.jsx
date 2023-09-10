/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const DataContext = ({children}) => {
    const [rooms, setRooms] = useState([])
    

    const GetData = category => {
        useEffect(() => {
            axios.get('https://airbnb-server-mocha.vercel.app/rooms')
            .then(data => {
                console.log(data.data);
                if(category){
                    const categoryData = data.data.filter(room => room.category === category);
                    setRooms(categoryData);
                }
                else{
                    setRooms(data.data)
                }
            })
            .catch(err => console.log(err))
        }, [category])
    }

    const authInfo = {
        rooms,
        setRooms,
        GetData,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
export default DataContext
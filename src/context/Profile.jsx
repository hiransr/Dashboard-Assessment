import React, { Children, createContext, useContext, useState } from 'react'
const profileContext = createContext(null)
export const useProfileContext = () => useContext(profileContext)
const Profile = ({ children }) => {
    const [profile, setProfile] = useState(null)
    return (
        <profileContext.Provider value={{ profile, setProfile }}>
            {children}
        </profileContext.Provider>
    )
}

export default Profile
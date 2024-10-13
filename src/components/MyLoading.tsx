import React from 'react'

interface Props {
    loading: boolean
    children: React.ReactNode
}
const MyLoading: React.FC<Props> = ({ children, loading }) => {
    return (
        <>
            {loading ? <div>Loading...</div> : <>{children}</>}
        </>
    )
}

export default MyLoading
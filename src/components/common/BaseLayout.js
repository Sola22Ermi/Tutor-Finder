import React from 'react'
import Navbar from './Navbar/Navbar'

function BaseLayout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default BaseLayout

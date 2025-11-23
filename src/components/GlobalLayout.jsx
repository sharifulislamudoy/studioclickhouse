import React from 'react'
import Navbar from './Navbar/Navbar'

export default function GlobalLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

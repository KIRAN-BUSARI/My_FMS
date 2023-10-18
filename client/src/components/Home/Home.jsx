import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className='text-orange-400 text-4xl bg-black'>This is Home</h1><br />
            <Link to='about'>
                <button className='bg-cyan-400 p-2 text-3xl rounded-lg font-bold m-3'>
                    About
                </button>
            </Link>
            <Link to='contact'>
                <button className='bg-cyan-400 p-2 text-3xl rounded-lg font-bold'>
                    Contact
                </button>
            </Link>
            <div className="">

            </div>
        </div>
        
    )
}

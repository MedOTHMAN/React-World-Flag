import React from 'react'
import Countries from '../component/Countries'
import Navigation from '../component/Navigation'

const Home = () => {
    return (
        <div className="home" >
            <Navigation />
            <Countries />
        </div>
    )
}

export default Home

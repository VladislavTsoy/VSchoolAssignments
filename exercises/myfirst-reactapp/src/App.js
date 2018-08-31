// Components are functions that return some JSX( HTML/JS )
import React from 'react'
import Hello from './Hello'

const App = () => {
    
    return (
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
        </div>
    )
}

export default App
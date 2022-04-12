import React from 'react';

function Home({ user }) {
    
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3x; font-bold underline">General ConTracktor</h1>
            <h2 className="text-3xl font-bold underline">Welcome, {user.username}!</h2>
        </div>
    )
}

export default Home
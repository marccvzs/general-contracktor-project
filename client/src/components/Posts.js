import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then(r => r.json())
        .then(postsArray => setPosts(postsArray))
    }, [])

    const postsList = posts.map(post => {
        return (
            <PostCard key={post.id} post={post} />
        )
    })
    
  return (
    <div className="bg-[#7f884a]/70 mt-4 w-full bg-cover h-screen">
        <header className="p-4 uppercase font-bold text-3xl">Posts</header>
        <div className="m-5">
            {postsList}
        </div>
    </div>
  )
}

export default Posts
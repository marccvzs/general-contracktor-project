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
    <div>
        {postsList}
    </div>
  )
}

export default Posts
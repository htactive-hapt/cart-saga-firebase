import React from 'react';

const Posts = ({ post, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            <li className='list-group-item'>
                {post.name}
            </li>
        </ul>
    );
};

export default Posts;
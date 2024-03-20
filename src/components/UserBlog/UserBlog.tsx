import React from 'react'

type user = {
    username: number
}

const getData = async (userId: number): Promise<user> => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error('this blog is not found')
    };
    return res.json()
}

const UserBlog = async ({userId}: {userId: number}) => {
    const user = await getData(userId)
    return (
        <div>
            <h4 className="text-customSoft font-bold">Author</h4>
            <p className="text-sm">{user.username}</p>
        </div>
    )
}

export default UserBlog
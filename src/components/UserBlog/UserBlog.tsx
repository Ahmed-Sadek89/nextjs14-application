import React from 'react'
import { getUserById } from '@/libs/User/User.data';
import { user } from '@/types/user.types';
import Image from 'next/image';

const UserBlog = async ({ userId }: { userId: string }) => {
    const user: user = await getUserById(userId);
    return (
        <React.Fragment>
            <div className="relative h-[50px] w-[50px]">
                <Image priority sizes="100%" src={user.image || '/noavatar.png'} alt={user.username || ''} fill className=" rounded-full" />
            </div>
            <div>
                <h4 className="text-customSoft font-bold">Author</h4>
                <p className="text-sm capitalize">{user.username}</p>
            </div>
        </React.Fragment>
    )
}

export default UserBlog
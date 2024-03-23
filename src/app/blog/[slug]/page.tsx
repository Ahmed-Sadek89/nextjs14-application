import UserBlog from "@/components/UserBlog/UserBlog";
import { getPostBySlug } from "@/libs/Post/Post.data";
import Image from "next/image"
import { Suspense } from "react";


export const metadata = {
    title: "Blog",
    description: "this is a blog page"
}

type params = {
    params: {
        slug: string
    }
}
const page = async ({ params }: params) => {
    const { slug } = params;
    const post = await getPostBySlug(slug)
    return (
        <Suspense fallback={<h2>loading...</h2>}>
            <main className="flex flex-col lg:flex-row justify-between gap-14">
                <div className="w-full lg:w-1/3">
                    <div className="relative h-[50vh] lg:h-screen w-full">
                        <Image priority sizes="100%" src={post?.img || '/noavatar.png'} alt="title" fill className="object-cover" />
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl font-bold">
                            {post?.title}
                        </h3>
                        <div className="flex flex-row gap-5 items-center">
                            <Suspense fallback={<h2>loading...</h2>}>
                                <UserBlog userId={post?.userId} />
                            </Suspense>
                            <div>
                                <h4 className="text-customSoft font-bold">Published</h4>
                                <p className="text-sm">{post.createdAt.toString().slice(4, 16)}</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-md">
                            {post?.desc}
                        </p>
                    </div>
                </div>
            </main>
        </Suspense>
    )
}

export default page
import Image from "next/image"


const page = () => {
    return (
        <main className="flex flex-col lg:flex-row justify-between gap-14">
            <div className="w-full lg:w-1/3">
                <div className="relative h-[50vh] lg:h-screen w-full">
                    <Image src={'https://images.pexels.com/photos/16272703/pexels-photo-16272703/free-photo-of-easter-cake-with-decor-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="title" fill className="object-cover" />
                </div>
            </div>
            <div className="w-full lg:w-2/3">
                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold">Title</h3>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="relative h-[50px] w-[50px]">
                            <Image src={'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="user" fill className=" rounded-full" />
                        </div>
                        <div>
                            <h4 className="text-customSoft font-bold">Author</h4>
                            <p className="text-sm">Ahmed Sadek</p>
                        </div>
                        <div>
                            <h4 className="text-customSoft font-bold">Published</h4>
                            <p className="text-sm">01/01/2024 22:16:AM</p>
                        </div>
                    </div>
                    <p className="text-sm md:text-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus neque ratione impedit assumenda exercitationem deleniti obcaecati? Doloremque consequatur sapiente, a omnis sunt eligendi harum, dolore velit distinctio, voluptas sed porro! 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus neque ratione impedit assumenda exercitationem deleniti obcaecati? Doloremque consequatur sapiente, a omnis sunt eligendi harum, dolore velit distinctio, voluptas sed porro! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus neque ratione impedit assumenda exercitationem deleniti obcaecati? Doloremque consequatur sapiente, a omnis sunt eligendi harum, dolore velit distinctio, voluptas sed porro! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus neque ratione impedit assumenda exercitationem deleniti obcaecati? Doloremque consequatur sapiente, a omnis sunt eligendi harum, dolore velit distinctio, voluptas sed porro!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default page
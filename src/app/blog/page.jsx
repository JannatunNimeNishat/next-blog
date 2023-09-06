import Image from "next/image";
import Link from "next/link";


// static data fetching
const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        // next:{revalidate: 10}, // it will re-call the api in every 10 seconds
        cache:"no-store", // it will not cash the fetch data it will fetch data in every single request
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


const Blog = async () => {
    const data = await getData();
    return (
        <div className="">
            {
                data.map(item => (

                    <Link key={item.id} className="flex items-center gap-[50px] mb-[50px]" href="/blog/testId">
                        <div >
                            <Image
                                className=" h-[250px] w-[400px] object-cover"
                                src="https://images.pexels.com/photos/14246241/pexels-photo-14246241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={400}
                                height={250}
                            />
                        </div>
                        <div>
                            <h1 className="mb-[10px] text-xl font-bold">{item.title}</h1>
                            <p className="text-[18px] text-[#999]">Des</p>
                        </div>
                    </Link>

                ))}

        </div>
    );
};

export default Blog;
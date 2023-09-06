import Image from "next/image";
import Link from "next/link";


const Blog = () => {
    return (
        <div className="">
            <Link className="flex items-center gap-[50px] mb-[50px]" href="/blog/testId">
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
                    <h1 className="mb-[10px] text-xl font-bold">Test</h1>
                    <p className="text-[18px] text-[#999]">Des</p>
                </div>
            </Link>
            
            <Link className="flex items-center gap-[50px] mb-[50px]" href="">
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
                    <h1 className="mb-[10px] text-xl font-bold">Test</h1>
                    <p className="text-[18px] text-[#999]">Des</p>
                </div>
            </Link>

        </div>
    );
};

export default Blog;
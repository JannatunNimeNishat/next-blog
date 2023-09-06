import Link from "next/link";


const Portfolio = () => {
    return (
        <div>
           <h1 className="my-[20px] text-2xl font-bold">Choose a gallery</h1>
           <div className="flex gap-[50px]">
            <Link className="border-4 border-[#bbb] h-[350px] w-[300px] relative bg-cover bg-[url('/illustration.png')]" href="/portfolio/illustrations">
                <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold  hover:text-[#53c28b]">Illustrations</span>
            </Link>
            <Link className="border-4 border-[#bbb] h-[350px] w-[300px] relative  bg-cover bg-[url('/websites.jpg')]" href="/portfolio/websites">
                <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold hover:text-[#53c28b]">Websites</span>
            </Link>
            <Link className="border-4 border-[#bbb] h-[350px] w-[300px] relative bg-cover bg-[url('/apps.jpg')]" href="/portfolio/applications">
                <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold hover:text-[#53c28b]">Applications</span>
            </Link>
           </div>
        </div>
    );
};

export default Portfolio;
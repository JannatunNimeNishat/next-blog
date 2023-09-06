import Button from "@/components/Button/Button";
import Image from "next/image";


const About = () => {
    return (
        <div className="py-10">
            <div className="w-full h-[300px] relative">
            {/* <div className=" relative"> */}
                <Image fill={true} className=" grayscale-[100%] object-cover " src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt="" />
                <div className="absolute bottom-[20px] left-[20px] bg-[#53c28b] p-[5px] text-white">
                    <h1 className="text-xl font-bold">Digital Storytellers</h1>
                    <h1 className="text-xl">Handcrafting award wining digital experiences</h1>
                </div>
            </div>
            {/* text container */}
            <div className="flex gap-[100px]">
                {/* 1st */}
                <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                    <h1 className="text-2xl font-bold">Who are We?</h1>
                    <p className="text-[18px] text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est, ipsam enim ipsa quasi numquam ducimus nulla consectetur quam minima maiores accusamus. Repellendus odio repellat, commodi eaque maxime quia voluptatum eos ad ipsam ducimus aspernatur, officiis eligendi sequi doloribus similique dolor illo odit soluta error totam dolore modi consequuntur voluptatem. Quod id sint, eligendi qui ratione illo, autem minima dolorum voluptas odio 
                        <br />
                        <br />
                        pariatur voluptas enim saepe perferendis a cumque architecto praesentium. Doloremque ducimus alias velit eveniet temporibus consequuntur. Dolores dolor voluptatibus molestias accusamus commodi, ratione minus eaque sequi rerum et explicabo delectus suscipit voluptatem similique nobis pariatur placeat
                    </p>
                </div>
                {/* 2nd */}
                <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                    <h1 className="text-2xl font-bold">Who are Do?</h1>
                    <p className="text-[18px] text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est, ipsam enim ipsa quasi numquam ducimus nulla consectetur quam minima maiores accusamus. Repellendus odio repellat, commodi eaque maxime quia voluptatum eos ad ipsam ducimus aspernatur, officiis eligendi sequi doloribus similique dolor illo odit soluta error totam dolore modi consequuntur voluptatem.
                    </p>
                    <Button text="contact" url="/contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
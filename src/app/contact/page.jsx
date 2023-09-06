import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from './page.module.css'
const Contact = () => {
    return (
        <div >
            <h1 className="text-[40px] mb-8 font-bold text-center">Let's Keep in Touch</h1>
            <div className="flex items-center gap-[100px]">
                {/* img */}
                <div className="flex-1 w-full h-[400px] relative ">
                    <Image
                    className={styles.img_animation}
                        src="/contact.png"
                        fill={true}
                        alt=""
                    />
                </div>
                {/* form */}
                <form className="flex-1 flex flex-col gap-[20px] bg-transparent">
                    <input className="bg-transparent border-2 border-[#bbb] p-[10px] text-[20px] font-bold" type="text" placeholder="name" name="" id="" />
                    <input className="bg-transparent border-2 border-[#bbb] p-[10px] text-[20px] font-bold" type="email" placeholder="email" name="" id="" />
                    <textarea className="bg-transparent border-2 border-[#bbb] p-[10px] text-[20px] font-bold" placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                    <Button url="#" text="send"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;
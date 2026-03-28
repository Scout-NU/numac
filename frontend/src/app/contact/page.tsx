import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen w-full">\
            <h1 className="pt-10 pl-30">How to Get In Touch</h1>
            <div className="flex bg-background pl-30 pt-10 pb-30 gap-70">
                <div className="flex">
                    <div className="flex h-150 w-3 bg-green-500 rounded-full"></div>
                    <div className="p-10">
                        <div>
                            <h3>For Potential Clients...</h3>
                            <div className="pt-8">
                                <div className="text-[20px] pt-4 pb-2">Ready to work with us?</div>
                                <div className="text-[20px] pt-2 pb-2">Fill Out this Form</div>
                                <div className="text-[20px] pt-2 pb-2">Email us</div>
                                <div className="text-[20px] pt-2 pb-2">Connect on LinkedIn</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex h-150 w-3 bg-green-500 rounded-full"></div>
                    <div className="p-10">
                        <div>
                            <h3>For Potential Clients...</h3>
                            <div className="pt-8">
                                <div className="text-[20px] pt-4 pb-2">Ready to work with us?</div>
                                <div className="text-[20px] pt-2 pb-2">Fill Out this Form</div>
                                <div className="text-[20px] pt-2 pb-2">Email us</div>
                                <div className="text-[20px] pt-2 pb-2">Connect on LinkedIn</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-background pl-30 pt-10 pb-40 gap-70 items-center">
                <div className="grid">
                    <h1>We would love to</h1>
                    <h1>hear from you!</h1>
                </div>
                <div className="relative">
                    <Image src="/images/person_with_phone.png" alt="background" className="object-cover object-center pr-10 z-30 relative bottom-5" width={570} height={380} />
                    <div className="absolute left-30 top-3 h-90 w-120 bg-green-500 z-10"></div>
                    <div className="absolute right-4 top-11 h-90 w-150 bg-green-200 z-0"></div>
                </div>
            </div>
        </div>
    );
}
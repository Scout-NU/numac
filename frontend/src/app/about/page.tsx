import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function About() {
    return (
        <div className="min-h-screen w-full">
            <div className="flex bg-background p-8">
                <Image className="p-10" src="https://placehold.co/600x400" alt="placeholder" width={600} height={400} unoptimized />
                <div className="flex flex-col gap-2 p-8">
                    <h2 className="p-2"><b>About</b></h2>
                    <h5 className="p-2">NUMA Consulting is the destination club on campus to grow your marketing consulting skills, attracting the top talent at Northeastern and providing opportunities for them to learn and grow within the club.</h5>
                </div>
            </div>
            <div className="bg-green-100 relative w-full h-90">
                <Image
                    src="/images/about_wave.png"
                    alt="background"
                    fill
                    className="object-cover"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
                    <div>
                        <h3 className="p-2"><b>Mission Statement</b></h3>
                        <h4 className="p-2">To help our clients develop distinctive and lasting marketing solutions while empowering our students to learn and grow their marketing skillset​​.</h4>
                    </div>
                </div>
            </div>
            <div className="grid bg-background p-10 items-center w-full h-full">
                <div className="flex p-8 justify-center">
                    <h1><b>Our Values</b></h1>
                </div>
                <div className="flex p-8 items-center justify-center w-full">
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                </div>
                <div className="flex p-8 items-center justify-center w-full">
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                    <div className="flex-1">
                        <h5>Description</h5>
                    </div>
                </div>
            </div>
            <div className="flex bg-background p-8">
                <div className="flex flex-col gap-2 p-8">
                    <h1 className="p-2"><b>The Organization</b></h1>
                    <h5 className="p-2">In-depth description about organization</h5>
                </div>
            </div>
        </div>
    );
}
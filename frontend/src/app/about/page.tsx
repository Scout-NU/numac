import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen w-full">
            <div className="flex bg-foreground p-8 text-black-primary">
                <img src="https://placehold.co/600x400" alt="placeholder" /> 
                <div className="flex flex-col gap-2 p-8">
                    <h1 className="text-4xl p-2">About</h1>
                    <p className="p-2">NUMA Consulting is the destination club on campus to grow your marketing consulting skills, attracting the top talent at Northeastern and providing opportunities for them to learn and grow within the club.</p>
                </div>
            </div>
            <div className="bg-green-100 relative w-full h-90">
                <Image
                    src="/images/about_wave.png"
                    alt="background"
                    fill
                    className="object-cover"
                />
                <div className="relative z-10 text-black-primary flex flex-col items-center justify-center h-full">
                    <div>
                        <h2 className="text-3xl p-2">Mission Statement</h2>
                        <p className="p-2">To help our clients develop distinctive and lasting marketing solutions while empowering our students to learn and grow their marketing skillset​​.</p>
                    </div>
                </div>
            </div>
            <div className="grid bg-foreground p-10 text-black-primary items-center w-full h-full">
                <div className="flex p-8 justify-center">
                    <h1 className="text-4xl">Our Values</h1>
                </div>
                <div className="flex p-8 items-center justify-center w-full">
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                </div>
                <div className="flex p-8 items-center justify-center w-full">
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                    <div className="flex-1">
                        <p>Description</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-foreground p-8 text-black-primary">
            <div className="flex flex-col gap-2 p-8">
                <h1 className="text-4xl p-2">The Organization</h1>
                <p className="p-2">In-depth description about organization</p>
            </div>
            </div>
        </div>
    );
}
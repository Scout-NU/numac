import Link from "next/link";

const projects = [
    {
        title: "Matcha Cafe Maíko",
        description: "A 6-member consulting team worked with Matcha Cafe Maiko Boston to drive winter revenue stabilization and deepen engagement within the Northeastern University community.",
        href: "/projects/matcha-cafe-maiko",
    },
    {
        title: "R3VIVE Fitness",
        description: "The team worked with R3VIVE Fitness to conduct a competitive benchmarking analysis, build a corporate outreach package, design a 3-month dual-platform digital marketing strategy, and recommend implementable corporate wellness program features.",
        href: "/projects/r3vive-fitness",
    },
    {
        title: "Madhrasi",
        description: "The team worked to advise Madhrasi, a South Indian chai brand distributed through cafés, online, and farmers markets, on retail expansion and café acquisition strategy.",
        href: "/projects/madhrasi",
    },
    {
        title: "Candlefish",
        description: "A 5-person consulting team developed a growth strategy for Candlefish's Boston expansion, analyzing 300K+ addressable consumers across 4 target segments to increase workshop sign-ups.",
        href: "/projects/candlefish",
    },
];

export default function WhatWeDo() {
    return (
        <div className="min-h-screen w-full bg-[#F7F4EC]">
            <div className="flex flex-col items-center gap-24 pt-[119px] pb-[100px]">
                <div className="w-[1036px] flex flex-col gap-[60px]">

                    {/* Header */}
<div className="flex flex-col gap-[28px]">
    <h1 className="text-[#2A614B] text-6xl font-semibold" style={{ fontFamily: "DIN 2014, sans-serif" }}>
        Explore our work
    </h1>
    <p className="text-[#212121] text-2xl font-normal w-[666px]" style={{ fontFamily: "DIN 2014, sans-serif" }}>
        Take a look at some of our most recent work.
    </p>
</div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-3 gap-[41px]">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-[41px]">
                        <ProjectCard project={projects[3]} />
                        <div className="w-[310px] h-[338px]" />
                        <div className="w-[310px] h-[338px]" />
                    </div>

                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: { title: string; description: string; href: string } }) {
    return (
        <div
            className="flex w-[310px] min-h-[338px] shrink-0 bg-[#BFCFC9] rounded-md overflow-hidden"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
        >
            <div className="w-[8px] shrink-0 bg-[#2A614B] rounded-l-md" />
            <div className="flex flex-col justify-between pt-6 pr-6 pl-[25px] pb-[37px] w-full">
                <div className="flex flex-col gap-[43px]">
                    <p className="text-2xl font-medium text-[#212121]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {project.title}
                    </p>
                    <p className="text-base font-normal text-[#212121]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {project.description}
                    </p>
                </div>
                <Link
                    href={project.href}
                    className="text-base font-medium text-[#2A614B] hover:underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    Read More →
                </Link>
            </div>
        </div>
    );
}
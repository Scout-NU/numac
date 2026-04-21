import Link from "next/link";

export default function MatchaCafeMaiko() {
    return (
        <div className="min-h-screen w-full bg-[#F7F4EC]">
            {/* Back button */}
            <div className="absolute top-[77px] right-[89px] flex items-center gap-1">
                <Link href="/whatwedo" className="text-[#2A614B] text-xl font-normal flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    ← Back
                </Link>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-24 pt-[105px] pb-[100px]">
                <div className="w-[1104px] flex flex-col items-end gap-14">

                    {/* Title + image */}
                    <div className="self-stretch flex flex-col gap-14">
                        <h1 className="text-[#2A614B] text-6xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                            Matcha Café Maiko
                        </h1>
                        <div className="w-full h-[569px] bg-[#D9D9D9]" />
                    </div>

                    {/* Overview */}
                    <p className="self-stretch text-[#1C1917] text-2xl font-normal leading-[29px]">
                        Partnered with Matcha Cafe Maiko Boston to boost winter revenue and student engagement through market research, competitive analysis, and three targeted seasonal campaigns. Developed a campus partnership and catering strategy that drove new customer acquisition and generated strong social engagement, including 580+ interactions on a single post.
                    </p>

                    {/* Impact heading */}
                    <p className="self-stretch text-center text-[#2A614B] text-3xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                        Impact
                    </p>

                    {/* Impact body */}
                    <p className="self-stretch text-[#212121] text-2xl font-normal leading-[29px]">
                        A 6-member consulting team worked with Matcha Cafe Maiko Boston to drive winter revenue stabilization and deepen engagement within the Northeastern University community. The team conducted primary and secondary market research, surveying Northeastern students and benchmarking 8 direct and indirect competitors on pricing, product differentiation, ambiance, and digital presence to identify high-impact growth opportunities.
                        <br /><br />
                        The team designed and executed 3 seasonal marketing campaigns (Hoosky collaboration, Winter Drink Special, Finals "Study Break" menu) to increase cold-season foot traffic and position Matcha Maiko as a premium, student-focused brand.
                        <br /><br />
                        The team developed a campus vendor partnership strategy targeting student organizations with recurring event budgets, building a pricing model, outreach plan, and catering framework to drive bulk orders and generate net-new customers; supported social promotion initiatives that achieved 580+ Instagram engagements on a single post.
                    </p>

                    {/* Photos and divider */}
                    <div className="w-[1104px] flex flex-col gap-14">
                        <div className="flex justify-center items-start gap-5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col w-80">
                                    <div className="w-80 h-44 bg-[#D9D9D9] flex items-center justify-center">
                                        <span className="text-[#212121] text-base" style={{ fontFamily: "Inter, sans-serif" }}>photo or icon</span>
                                    </div>
                                    <p className="text-[#212121] text-base font-normal mt-1" style={{ fontFamily: "Inter, sans-serif" }}>caption</p>
                                    <p className="text-[#212121] text-base font-normal" style={{ fontFamily: "Inter, sans-serif" }}>Description</p>
                                </div>
                            ))}
                        </div>
                        <div className="self-stretch h-3.5 bg-[#2A614B] rounded-md" />
                    </div>

                    {/* Client Testimonial */}
                    <div className="w-[1104px] flex flex-col gap-14">
                        <p className="self-stretch text-center text-[#2A614B] text-3xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                            Client Testimonial
                        </p>
                        <p className="self-stretch text-[#212121] text-2xl font-normal leading-[29px]">
                            "Working with NUMAC was a great experience for our team at Matcha Café Maiko. They delivered a thoughtful market research report that helped us better understand student perception and identify clear opportunities to increase awareness and repeat visits. They also created a catering menu that made it easier for us to approach campus orders and group events.
                            <br /><br />
                            Beyond the deliverables, the team brought strong ideas, connected us with Hoosky for additional student advertising, and offered practical recommendations we could actually execute. Overall, NUMAC felt less like a class project and more like a real consulting team that genuinely cared about helping our business grow."
                            {" "}<span className="text-[#2A614B] font-bold">- Henry, Owner of Matcha Cafe Maiko Fenway</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
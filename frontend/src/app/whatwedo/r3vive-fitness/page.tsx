import Link from "next/link";

export default function R3VIVEFitness() {
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

                    {/* Title + image + overview */}
                    <div className="self-stretch flex flex-col gap-14">
                        <h1 className="text-[#2A614B] text-6xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                            R3VIVE Fitness
                        </h1>
                        <div className="w-full h-[569px] bg-[#D9D9D9]" />
                        <p className="text-[#1C1917] text-2xl font-normal leading-[29px]">
                            Partnered with R3VIVE to conduct competitive benchmarking and market research, identifying gaps in the corporate wellness space and positioning the brand as a differentiated B2B provider. Developed a comprehensive outreach and marketing strategy including a targeted company database, tiered pricing model, digital campaigns, and scalable program features to drive pipeline growth and expand brand presence among corporate decision-makers.
                        </p>
                    </div>

                    {/* Impact heading */}
                    <p className="self-stretch text-center text-[#2A614B] text-3xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                        Impact
                    </p>

                    {/* Impact body */}
                    <p className="self-stretch text-[#212121] text-2xl font-normal leading-[29px]">
                        The team conducted a competitive benchmarking analysis of 5+ corporate wellness providers (including F45, Orange Theory, Inner City Weightlifting, ZeroCater, and Barry's Bootcamp), identifying critical market gaps and delivering a data-backed market research report spanning audience segmentation, competitor SWOT analysis, and actionable differentiation strategies.
                        <br /><br />
                        The team built a comprehensive corporate outreach package — including a geo-targeted database of high-fit Boston companies (Cruz Companies, Shawmut Design, Dimock Center, MassMutual, Takeda, Klaviyo), 4 customizable email templates, and a tiered pitch deck with 3 service tiers ($500–$3,500/month) — to accelerate B2B pipeline development.
                        <br /><br />
                        The team designed a 3-month dual-platform digital marketing strategy across Instagram and LinkedIn, incorporating a structured posting calendar (3x/week), platform-specific content frameworks, and a full-funnel paid ad strategy (awareness → consideration → conversion) to grow R3VIVE's LinkedIn following (19 followers) and Instagram reach (745 followers) among corporate decision-makers.
                        <br /><br />
                        The team recommended 7 implementable corporate wellness program features — including tiered pricing, a digital wellness platform, mental health support, wellness challenges, health education workshops, provider partnerships, and ROI reporting analytics — to position R3VIVE as a credible and scalable B2B wellness partner.
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
                            "Working with NUMAC has been one of the most impactful decisions we've made for R3VIVE Fitness. Their team brought a level of professionalism, creativity, and strategic thinking that exceeded our expectations and helped elevate our position in the health and wellness space.
                            <br /><br />
                            From the start, NUMAC approached our growth goals with genuine curiosity and energy. They conducted thorough market research to help us better understand our positioning in the health and wellness space — not just as a gym, but as a potential partner for corporate clients looking to invest in the well-being of their employees.
                            <br /><br />
                            NUMAC identified key opportunities in the local business community, crafted compelling outreach frameworks, and helped us articulate our value proposition in a way that resonates with HR teams and decision-makers at organizations that prioritize employee wellness programs. The research they delivered gave us a clear, data-informed roadmap for approaching these conversations with confidence.
                            <br /><br />
                            Beyond the strategy, their marketing materials and messaging were sharp, on-brand, and purpose-built for the audiences we're trying to reach. It's clear that the NUMAC team takes ownership and pride in their work and care about results.
                            <br /><br />
                            We're proud to have partnered with NUMAC and grateful for the foundation they've helped us build."
                            {" "}<span className="text-[#2A614B] font-bold">- Joel, Owner of R3VIVE Fitness</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
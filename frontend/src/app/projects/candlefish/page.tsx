import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Candlefish" };

export default function Candlefish() {
    return (
        <div className="min-h-screen w-full bg-[#F7F4EC]">
            {/* Back button */}
            <div className="absolute top-[77px] right-[89px]">
                <Link href="/projects" className="text-[#2A614B] text-xl font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                    ← Back
                </Link>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-24 pt-[105px] pb-[100px]">
                <div className="w-[1104px] flex flex-col items-end gap-14">

                    {/* Title + image + overview */}
                    <div className="self-stretch flex flex-col gap-14">
                        <h1 className="text-[#2A614B] text-6xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                            Candlefish
                        </h1>
                        <div className="w-full h-[569px] bg-[#D9D9D9]" />
                        <p className="text-[#1C1917] text-2xl font-normal leading-[29px]">
                            Partnered with Candlefish to advise on their Boston expansion growth strategy using consumer segmentation, competitive benchmarking, and digital audits to identify key opportunities to increase workshop sign-ups. Developed data-driven growth pillars, a conversion-focused marketing framework, and a data integration roadmap to support targeted outreach and project a 20–30% lift in group bookings.
                        </p>
                    </div>

                    {/* Impact heading */}
                    <p className="self-stretch text-center text-[#2A614B] text-3xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                        Impact
                    </p>

                    {/* Impact body */}
                    <p className="self-stretch text-[#212121] text-2xl font-normal leading-[29px]">
                        A 5-person consulting team developed a growth strategy for Candlefish&apos;s Boston expansion, analyzing 300K+ addressable consumers across 4 target segments to increase workshop sign-ups.
                        <br /><br />
                        The team conducted competitive benchmarking of 7 experiential retail competitors (5 within a 10-minute radius), identifying 4 strategic gaps and delivering 5 data-backed growth pillars (personalization, event strategy, omnichannel optimization, corporate outreach, sustainability storytelling).
                        <br /><br />
                        The team audited and restructured multi-platform digital strategy (Instagram, TikTok, LinkedIn), leveraging industry research (68% consumer trust in aesthetic content; 4/5 LinkedIn users influence business purchases) to design a conversion-focused content and influencer ROI tracking framework.
                        <br /><br />
                        The team built a data-integration roadmap linking workshop capacity, AOV, conversion rates, and scent-level sales trends to marketing initiatives, projecting 20–30% lift in group bookings through targeted B2B and university outreach activation.
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
                            &quot;Input here&quot;
                            <br />
                            <span className="text-[#2A614B] font-bold">- Name, Owner of Candlefish</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
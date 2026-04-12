import Link from "next/link";

export default function Madhrasi() {
    return (
        <div className="min-h-screen w-full bg-[#F7F4EC]">
            {/* Back button */}
            <div className="absolute top-[77px] right-[89px]">
                <Link href="/whatwedo" className="text-[#2A614B] text-xl font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                    ← Back
                </Link>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-24 pt-[105px] pb-[100px]">
                <div className="w-[1104px] flex flex-col items-end gap-14">

                    {/* Title + image + overview */}
                    <div className="self-stretch flex flex-col gap-14">
                        <h1 className="text-[#2A614B] text-6xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                            Madhrasi
                        </h1>
                        <div className="w-full h-[569px] bg-[#D9D9D9]" />
                        <p className="text-[#1C1917] text-2xl font-normal leading-[29px]">
                            Partnered with Madhrasi to advise on retail expansion and café acquisition strategy through data-driven market analysis and customer research. Developed a targeted expansion model and integrated sales plan including B2B outreach, seasonal launches, and retention strategies to drive growth and reduce revenue concentration risk.
                        </p>
                    </div>

                    {/* Impact heading */}
                    <p className="self-stretch text-center text-[#2A614B] text-3xl font-bold" style={{ fontFamily: "DIN Alternate, sans-serif" }}>
                        Impact
                    </p>

                    {/* Impact body */}
                    <p className="self-stretch text-[#212121] text-2xl font-normal leading-[29px]">
                        The team worked to advise Madhrasi, a South Indian chai brand distributed through cafés, online, and farmers markets, on retail expansion and café acquisition strategy.
                        <br /><br />
                        The team analyzed an 800+ retail partner database, segmenting cafés by state, city, rating, review count, and social following to build a 3-tier expansion model prioritizing highest-ROI geographic clusters.
                        <br /><br />
                        The team conducted customer journey and café adoption research (awareness → retention), identifying key drivers such as small-batch trials, supplier trust, and seasonal purchasing patterns; translated insights into retention-focused loyalty, subscription, and sampling strategies to mitigate revenue concentration risk.
                        <br /><br />
                        The team developed an integrated Sales Growth & Café Expansion Plan including B2B outreach decks, seasonal launch strategy, and product bundling recommendations to address winter revenue volatility, regional preference differences, and product-line dependency.
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
                            "Input here"
                            <br />
                            <span className="text-[#2A614B] font-bold">- Name, Owner of Madhrasi</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
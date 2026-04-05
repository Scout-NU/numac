export default function OurTeams() {
    const imgStyle = { width: "180px", height: "187.644px" };
    const cardStyle = { width: "180px" };

    return (
        <div className="min-h-screen w-full pt-10 pr-30 pl-30 pb-20">
            <div className="bg-background w-full mx-auto">
                <h1 className="pt-10 pb-10"><b>Welcome to NUMAC</b></h1>
                <img src="https://placehold.co/700x400" alt="placeholder" className="w-full mt-4" />
                <h2 className="pt-15 pb-10 text-center"><b>Team Structure</b></h2>
                <h5 style={{ color: "var(--green-primary)" }}>1. Project Manager</h5>
                <br />
                <h5><b>Project Managers</b> lead our consulting teams and work directly with clients and teams to deliver high quality marketing recommendations and solutions through relentless organization and team management skills.</h5>
                <br />
                <h5 style={{ color: "var(--green-primary)" }}>2. Senior Consultant (Strategy & Creative)</h5>
                <br />
                <h5><b>Senior Consultants</b> are expected to have a higher level of responsibility within the team, leveraging their experience to handle more complex projects. This role is best suited for those who are at least in their second year and have relevant consulting, internship, or co-op experience. <b>Senior Strategists</b> lead early conversations, define project direction, and refine strategic outputs. They ensure the strategy is clear, compelling, and aligned with client goals. <b>Senior Creatives</b> own the brand's visual identity and ensure consistency across all materials. They guide junior creatives and finalize deliverables with a strong design vision.</h5>
                <br />
                <h5 style={{ color: "var(--green-primary)" }}>3. Junior Consultant (Strategy & Creative)</h5>
                <br />
                <h5 className="pb-20"><b>Junior Consultants</b> are entry-level members of our team who are eager to dive into the world of consulting. This role is perfect for those with little to no prior experience or for consultants interested in joining the club. <b>Strategy Consultants</b> shape the direction of the project. <b>Junior Strategists</b> conduct research, analyze customer behavior, and help build the foundation for brand recommendations. Creative Consultants bring the brand to life visually. Junior Creatives help design mockups, set the brand's look and feel, and support the creation of the final deck.</h5>
                <hr className="border-5 border-green-primary rounded-full" />
                <h2 className="pt-15 pb-5 text-center"><b>Meet Our Leadership</b></h2>
                <div className="bg-background p-10 w-full">
                    <div className="flex gap-8 p-8 w-full items-start justify-center">
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/lauren_uy.png" alt="Lauren Uy" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Lauren Uy</b></div>
                            <p className="pb-5"><i>Executive Director</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">International Business, Marketing & Corporate Innovation</p>
                            <p><b>Co-ops:</b></p>
                            <p>Strategy Intern at VML & Operations at TikTok Shop</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/yiru_zhou.png" alt="Yiru Zhou" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Yiru Zhou</b></div>
                            <p className="pb-5"><i>Associate Director</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business & Design</p>
                            <p><b>Co-ops:</b></p>
                            <p>Commercial Associate at Wayfair & Graphic Design at TJX</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/kaia_thelwell.png" alt="Kaia Thelwell" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Kaia Thelwell</b></div>
                            <p className="pb-5"><i>Director of Consulting</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business & Psychology</p>
                            <p><b>Co-ops:</b></p>
                            <p>Marketing Cloud Consultant at IBM & Strategy Consultant at TRC</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/tehya_ketvoravit.png" alt="Tehya Ketvoravit" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Tehya Ketvoravit</b></div>
                            <p className="pb-5"><i>Associate Director of Consulting</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business (Fintech), Minors in Data Science and Consulting</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/antonella_eyl.png" alt="Antonella Eyl" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Antonella Eyl</b></div>
                            <p className="pb-5"><i>Director of Professional Development</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business Admin, Brand Management and Entrepreneurship</p>
                            <p><b>Co-ops:</b></p>
                            <p>Email Marketing at TJX & Marketing Co-op at Quickbase</p>
                        </div>
                    </div>
                    <div className="flex gap-8 p-8 w-full items-start justify-center">
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/julianna_moises.png" alt="Julianna Moises" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Julianna Moises</b></div>
                            <p className="pb-5"><i>Director of Talent Development</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business Admin, Marketing Analytics</p>
                            <p><b>Co-ops:</b></p>
                            <p>Investor Relations and Marketing Co-op at Charlesbank & Sales Enablement Co-op at EF</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/sophia_singh.png" alt="Sophia Singh" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Sophia Singh</b></div>
                            <p className="pb-5"><i>Director of Client & Strategic Partnerships</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business, Marketing Analytics & Finance</p>
                            <p><b>Co-ops:</b></p>
                            <p>Public Relations at MFS Investment Management</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/marissa_shapiro.png" alt="Marissa Shapiro" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Marissa Shapiro</b></div>
                            <p className="pb-5"><i>Co-Director of Marketing</i></p>
                            <p><b>Major:</b></p>
                            <p className="pb-5">Business, Marketing Analytics</p>
                            <p><b>Co-ops:</b></p>
                            <p>Commercial Associate at Wayfair & Operations at State Street</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}>
                            <img src="/images/daniel_lopez.png" alt="Daniel Lopez" style={imgStyle} className="object-cover object-top" />
                            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>Daniel Lopez</b></div>
                            <p className="pb-5"><i>Co-Director of Marketing</i></p>
                            <p><b>Major:</b></p>
                            <p>Business, Marketing & Communications</p>
                        </div>
                        <div className="flex flex-col" style={cardStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
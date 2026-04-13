interface LeadershipMember {
    src: string;
    alt: string;
    name: string;
    title: string;
    major: string;
    coops: string | null;
}


export default function OurTeams() {
    const imgStyle = { width: "210px", height: "210px" };
    const cardStyle = { width: "210px" };

    const leadershipRow1 = [
        {
            src: "/images/lauren_uy.png",
            alt: "Lauren Uy",
            name: "Lauren Uy",
            title: "Executive Director",
            major: "International Business, Marketing & Corporate Innovation",
            coops: "Strategy Intern at VML & Operations at TikTok Shop",
        },
        {
            src: "/images/yiru_zhou.png",
            alt: "Yiru Zhou",
            name: "Yiru Zhou",
            title: "Associate Director",
            major: "Business & Design",
            coops: "Commercial Associate at Wayfair & Graphic Design at TJX",
        },
        {
            src: "/images/kaia_thelwell.png",
            alt: "Kaia Thelwell",
            name: "Kaia Thelwell",
            title: "Director of Consulting",
            major: "Business & Psychology",
            coops: "Marketing Cloud Consultant at IBM & Strategy Consultant at TRC",
        },
        {
            src: "/images/tehya_ketvoravit.png",
            alt: "Tehya Ketvoravit",
            name: "Tehya Ketvoravit",
            title: "Associate Director of Consulting",
            major: "Business (Fintech), Minors in Data Science and Consulting",
            coops: null,
        },
        {
            src: "/images/antonella_eyl.png",
            alt: "Antonella Eyl",
            name: "Antonella Eyl",
            title: "Director of Professional Development",
            major: "Business Admin, Brand Management and Entrepreneurship",
            coops: "Email Marketing at TJX & Marketing Co-op at Quickbase",
        },
    ];

    const leadershipRow2 = [
        {
            src: "/images/julianna_moises.png",
            alt: "Julianna Moises",
            name: "Julianna Moises",
            title: "Director of Talent Development",
            major: "Business Admin, Marketing Analytics",
            coops: "Investor Relations and Marketing Co-op at Charlesbank & Sales Enablement Co-op at EF",
        },
        {
            src: "/images/sophia_singh.png",
            alt: "Sophia Singh",
            name: "Sophia Singh",
            title: "Director of Client & Strategic Partnerships",
            major: "Business, Marketing Analytics & Finance",
            coops: "Public Relations at MFS Investment Management",
        },
        {
            src: "/images/marissa_shapiro.png",
            alt: "Marissa Shapiro",
            name: "Marissa Shapiro",
            title: "Co-Director of Marketing",
            major: "Business, Marketing Analytics",
            coops: "Commercial Associate at Wayfair & Operations at State Street",
        },
        {
            src: "/images/daniel_lopez.png",
            alt: "Daniel Lopez",
            name: "Daniel Lopez",
            title: "Co-Director of Marketing",
            major: "Business, Marketing & Communications",
            coops: null,
        },
    ];

    const renderCard = (person: LeadershipMember, index: number) => (
        <div className="flex flex-col" style={cardStyle} key={index}>
            <img src={person.src} alt={person.alt} style={imgStyle} className="object-cover object-top" />
            <div className="pb-2 pt-5" style={{ fontSize: "20px" }}><b>{person.name}</b></div>
            <p className="pb-5"><i>{person.title}</i></p>
            <p><b>Major:</b></p>
            <p className="pb-5">{person.major}</p>
            {person.coops && (
                <>
                    <p><b>Co-ops:</b></p>
                    <p>{person.coops}</p>
                </>
            )}
        </div>
    );

    return (
        <div className="min-h-screen w-full pt-10 pr-30 pl-30 pb-20">
            <div className="bg-background w-full mx-auto">
                <h1 className="pt-10 pb-10"><b>Welcome to NUMAC</b></h1>
                <div className="flex justify-center items-center">
                    <img
                        src="/images/team.png"
                        alt="Team Photo"
                        className="w-[1800px] h-[850px] object-cover object-top"
                    />
                </div>
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
                    <div className="flex gap-30 p-8 w-full items-start justify-center">
                        {leadershipRow1.map((person, index) => renderCard(person, index))}
                    </div>
                    <div className="flex gap-30 p-8 w-full items-start justify-center">
                        {leadershipRow2.map((person, index) => renderCard(person, index))}
                        <div className="flex flex-col" style={cardStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
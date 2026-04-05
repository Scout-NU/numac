import ClientTestimonial from './components/ClientTestimonial';
import ExploreOurWorkCarousel from './components/ExploreOurWorkCarousel';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1f1f1f]">
      <main className="w-full">
        {/* Mission Statement */}
        <section className="bg-[#89a79d] px-8 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-4xl font-medium text-[#f4efe7] md:text-5xl">
                Mission Statement
              </h2>
              <p className="max-w-4xl text-lg leading-8 text-[#f4efe7] md:text-xl md:leading-10">
                We aim to help our clients develop distinctive and lasting marketing
                solutions while empowering our students to learn and grow their
                marketing skillset.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Our Work */}
        <section className="px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <h2 className="text-5xl font-semibold text-[#1f7a5a] md:text-6xl">
                Explore our work
              </h2>
            </div>

            <ExploreOurWorkCarousel
              projects={[
                { name: 'Project 1', description: 'Description', href: '#' },
                { name: 'Project 2', description: 'Description', href: '#' },
                { name: 'Project 3', description: 'Description', href: '#' },
                { name: 'Project 4', description: 'Description', href: '#' },
              ]}
            />
          </div>
        </section>

        {/* What is NUMAC */}
        <section className="px-6 py-14 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div className="pt-1">
              <h2 className="mb-12 text-3xl font-semibold text-[#1f1f1f] md:text-5xl">
                What is NUMAC?
              </h2>
              <p className="max-w-md text-lg leading-9 text-[#1f1f1f]">
                Explanation
                <br />
                word words more words
              </p>
            </div>

            <div>
              <div className="h-[280px] w-full bg-[#d9d9d9] md:h-[390px]" />
            </div>
          </div>
        </section>

        {/* Client Testimonies */}
        <section className="px-6 pb-20 pt-8 md:px-12 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-14 text-center text-5xl font-semibold text-[#1f7a5a] md:text-6xl">
              Client Testimonies
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              <ClientTestimonial
                name="Joel"
                company="Owner of R3VIVE Fitness"
                preview="Their team brought a level of professionalism, creativity, and strategic thinking that exceeded our expectations and helped elevate our position in the health and wellness space."
                fullTestimonial="Their team brought a level of professionalism, creativity, and strategic thinking that exceeded our expectations and helped elevate our position in the health and wellness space."
              />
              <ClientTestimonial
                name="Henry"
                company="Owner of Matcha Cafe Maiko Fenway"
                preview="Working with NUMAC was a great experience for our team at Matcha Café Maiko."
                fullTestimonial="Working with NUMAC was a great experience for our team at Matcha Café Maiko."
              />
              <ClientTestimonial
                name="Name"
                company="Company"
                preview=""
                fullTestimonial=""
              />
              <ClientTestimonial
                name="Name"
                company="Company"
                preview=""
                fullTestimonial=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

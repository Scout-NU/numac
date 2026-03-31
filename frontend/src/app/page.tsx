import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#2d2d2d]">
      <main className="w-full">
        <section className="bg-[#b8c9c1] px-8 py-16 md:px-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Mission Statement</h2>
              <p className="text-base md:text-lg leading-8 text-[#1f1f1f]">
                To help our clients develop distinctive and lasting marketing
                solutions while empowering our students to learn and grow their
                marketing skillset.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[#2d2d2d]"> Explore our work </h2>
              <p className="text-base md:text-lg text-[#2d2d2d]">Caption</p>
              </div>

            <div className="relative flex items-center justify-center gap-4 md:gap-6">
              <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6f58] text-white shadow-lg text-xl">
                ←
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="rounded-md bg-[#cfc4b2] shadow-md overflow-hidden border-l-4 border-[#2f6f58]">
                  <div className="p-4">
                    <div className="h-40 rounded-md bg-[#e8e2d8] mb-4" />
                    <h3 className="text-xl font-medium mb-2">Name</h3>
                    <p className="text-sm mb-8">Description</p>
                    <button className="text-sm text-[#2f6f58] font-medium">Read More →</button>
                  </div>
                </div>

                <div className="rounded-md bg-[#cfc4b2] shadow-md overflow-hidden border-l-4 border-[#2f6f58]">
                  <div className="p-4">
                    <div className="h-40 rounded-md bg-[#e8e2d8] mb-4" />
                    <h3 className="text-xl font-medium mb-2">Name</h3>
                    <p className="text-sm mb-8">Description</p>
                    <button className="text-sm text-[#2f6f58] font-medium">Read More →</button>
                  </div>
                </div>

                <div className="rounded-md bg-[#cfc4b2] shadow-md overflow-hidden border-l-4 border-[#2f6f58]">
                  <div className="p-4">
                    <div className="h-40 rounded-md bg-[#e8e2d8] mb-4" />
                    <h3 className="text-xl font-medium mb-2">Name</h3>
                    <p className="text-sm mb-8">Description</p>
                    <button className="text-sm text-[#2f6f58] font-medium">Read More →</button>
                  </div>
                </div>
              </div>

              <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6f58] text-white shadow-lg text-xl">
                →
              </button>
            </div>

            <div className="flex justify-center mt-12">
              <button className="rounded-3xl bg-[#2f6f58] px-12 py-5 text-white text-2xl font-semibold shadow-lg">
                What we do
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-12 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="pt-2">
              <h2 className="text-4xl md:text-5xl font-semibold mb-10">What is NUMAC?</h2>
              <p className="text-base md:text-lg leading-8 max-w-sm">
                Explanation
                <br />
                words
              </p>
            </div>

            <div>
              <div className="w-full h-[260px] md:h-[360px] bg-[#d9d9d9]" />
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 pt-8 md:px-12 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-semibold mb-12">
              Client Testimonies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="min-h-[220px] bg-[#b8c9c1] rounded-sm p-5 border-l-4 border-[#2f6f58]">
                <h3 className="text-xl font-medium mb-1">Name</h3>
                <p className="text-sm mb-8">Company</p>
                <div className="text-4xl font-bold leading-none">“</div>
              </div>

              <div className="min-h-[220px] bg-[#b8c9c1] rounded-sm p-5 border-l-4 border-[#2f6f58]">
                <h3 className="text-xl font-medium mb-1">Name</h3>
                <p className="text-sm mb-8">Company</p>
                <div className="text-4xl font-bold leading-none">“</div>
              </div>

              <div className="min-h-[220px] bg-[#b8c9c1] rounded-sm p-5 border-l-4 border-[#2f6f58]">
                <h3 className="text-xl font-medium mb-1">Name</h3>
                <p className="text-sm mb-8">Company</p>
                <div className="text-4xl font-bold leading-none">“</div>
              </div>

              <div className="min-h-[220px] bg-[#b8c9c1] rounded-sm p-5 border-l-4 border-[#2f6f58]">
                <h3 className="text-xl font-medium mb-1">Name</h3>
                <p className="text-sm mb-8">Company</p>
                <div className="text-4xl font-bold leading-none">“</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

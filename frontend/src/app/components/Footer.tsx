export default function Footer() {
  return (
    <footer className="w-full bg-green-primary h-80 relative px-[106px] pt-[67px]">
      <h3 className="font-din text-4xl font-semibold text-[#F7F4EC] mb-[63px]">Let&apos;s connect</h3>
      <div className="flex gap-[136px]">
        <div className="flex flex-col gap-2.5">
          <p className="font-nimbus text-2xl font-normal text-[#F7F4EC] mb-0">Contact</p>
          <a href="mailto:consultingnuma@gmail.com" className="font-nimbus text-base font-normal text-[#F7F4EC] hover:font-bold transition-all">
            Email
          </a>
          <a href="/contact" className="font-nimbus text-base font-normal text-[#F7F4EC] hover:font-bold transition-all">
            Contact Form
          </a>
        </div>
        <div className="flex flex-col gap-3.5">
          <p className="font-nimbus text-2xl font-normal text-[#F7F4EC] mb-0">Socials</p>
          <a href="https://www.instagram.com/numaconsulting/" className="font-nimbus text-base font-normal text-[#F7F4EC] hover:font-bold transition-all">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/numaconsulting/posts/?feedView=all" className="font-nimbus text-base font-normal text-[#F7F4EC] hover:font-bold transition-all">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
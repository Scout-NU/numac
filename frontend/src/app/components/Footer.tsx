export default function Footer() {
 return (
   <footer className="w-full bg-green-primary px-8 pt-8 h-[307px] text-beige-primary">
     <h3 className="font-sans text-[36px] font-light text-[#F7F4EC] mb-6">Let's connect</h3>
     <div className="flex gap-16 font-sans text-sm mt-[40px]">
       <div className="flex flex-col gap-2">
         <p className="font-sans text-[24px] font-light text-[#F7F4EC] mb-2">Contact</p>
         <a href="mailto:consultingnuma@gmail.com" className="font-sans text-[15px] font-light text-[#F7F4EC] hover:font-bold transition-all">
           consultingnuma@gmail.com
         </a>
       </div>
       <div className="flex flex-col gap-[15px]">
         <p className="font-sans text-[24px] font-light text-[#F7F4EC] mb-2">Socials</p>
         <a href="#" className="font-sans text-[15px] font-light text-[#F7F4EC] hover:font-bold transition-all">Instagram @numaconsulting</a>
         <a href="#" className="font-sans text-[15px] font-light text-[#F7F4EC] hover:font-bold transition-all">LinkedIn LINK</a>
         <a href="#" className="font-sans text-[15px] font-light text-[#F7F4EC] hover:font-bold transition-all">content</a>
       </div>
     </div>
   </footer>
 );
}

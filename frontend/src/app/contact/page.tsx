import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen w-full">\
            <h1 className="pt-10 pl-30"><b>How to Get In Touch</b></h1>
            <div className="flex bg-background pl-30 pt-10 pb-30 w-full">
                <div className="flex flex-1">
                    <div className="flex h-150 w-2 bg-green-500 rounded-full"></div>
                    <div className="p-10">
                        <div>
                            <h3>For Potential Clients...</h3>
                            <div className="pt-8">
                                <div className="text-[20px] pt-4 pb-2">Ready to work with us?</div>
                                <div className="text-[20px] pt-2 pb-2">Fill Out this Form</div>
                                <div className="text-[20px] pt-2 pb-2">Email us</div>
                                <div className="text-[20px] pt-2 pb-2">Connect on LinkedIn</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex h-150 shrink-0 w-2 bg-green-500 rounded-full"></div>
                    <div className="p-10">
                        <div>
                            <h3>For Potential Members...</h3>
                            <div className="pt-8">
                                <div className="text-[20px] pt-4 pb-2">NUMAC is open to all undergraduate students, regardless of major or year. We value diverse perspectives and welcome anyone with an interest in marketing, strategy, or consulting. </div>
                                <div className="text-[20px] pt-4 pb-2">Recruitment happens toward the end of each semester (November in the fall and March in the spring). We host a week of events—such as case workshops, info sessions, and meet-and-greets with current members. Prospective members then submit a brief application form involving a case scenario and questions to get to know them better. After screening, selected participants will be invited to partake in two rounds of interviews, one behavioral and one case. </div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-background pl-30 pt-10 pb-40 items-center">
                <div className="flex flex-1">
                    <div className="grid">
                        <h1><b>We would love to</b></h1>
                        <h1><b>hear from you!</b></h1>
                        <div className="flex items-center pt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                                <g filter="url(#filter0_d_444_597)">
                                    <path d="M59.1401 0C64.7648 0.0149996 67.6196 0.0449989 70.0845 0.114997L71.0545 0.149996C72.1744 0.189995 73.2793 0.239994 74.6143 0.299992C79.934 0.549986 83.5638 1.38997 86.7487 2.62494C90.0485 3.89491 92.8284 5.61486 95.6082 8.3898C98.1516 10.8884 100.119 13.912 101.373 17.2496C102.608 20.4345 103.448 24.0644 103.698 29.3893C103.758 30.7193 103.808 31.8242 103.848 32.9492L103.878 33.9192C103.953 36.3791 103.983 39.2341 103.993 44.8589L103.998 48.5888V55.1387C104.01 58.7856 103.972 62.4325 103.883 66.0784L103.853 67.0484C103.813 68.1733 103.763 69.2783 103.703 70.6083C103.453 75.9332 102.603 79.5581 101.373 82.748C100.119 86.0855 98.1516 89.1092 95.6082 91.6078C93.1097 94.1512 90.0861 96.1186 86.7487 97.3726C83.5638 98.6076 79.934 99.4476 74.6143 99.6976L71.0545 99.8476L70.0845 99.8776C67.6196 99.9476 64.7648 99.9826 59.1401 99.9926L55.4102 99.9976H48.8656C45.2171 100.01 41.5686 99.9721 37.9211 99.8826L36.9512 99.8526C35.7643 99.8076 34.5777 99.756 33.3914 99.6976C28.0716 99.4476 24.4418 98.6076 21.252 97.3726C17.9163 96.118 14.8945 94.1506 12.3974 91.6078C9.85227 89.1097 7.88319 86.086 6.62771 82.748C5.39277 79.5631 4.55282 75.9332 4.30283 70.6083L4.15284 67.0484L4.12784 66.0784C4.03567 62.4326 3.994 58.7856 4.00284 55.1387V44.8589C3.98901 41.212 4.02567 37.5651 4.11284 33.9192L4.14784 32.9492C4.18783 31.8242 4.23783 30.7193 4.29783 29.3893C4.54782 24.0644 5.38777 20.4395 6.62271 17.2496C7.88112 13.9107 9.85367 10.8869 12.4024 8.3898C14.8981 5.8476 17.9181 3.88027 21.252 2.62494C24.4418 1.38997 28.0666 0.549986 33.3914 0.299992C34.7213 0.239994 35.8312 0.189995 36.9512 0.149996L37.9211 0.119997C41.5669 0.0311628 45.2137 -0.00717331 48.8606 0.00499952L59.1401 0ZM54.0003 24.9994C47.3702 24.9994 41.0117 27.6333 36.3235 32.3215C31.6354 37.0098 29.0016 43.3685 29.0016 49.9988C29.0016 56.629 31.6354 62.9877 36.3235 67.676C41.0117 72.3643 47.3702 74.9982 54.0003 74.9982C60.6304 74.9982 66.9889 72.3643 71.6771 67.676C76.3653 62.9877 78.9991 56.629 78.9991 49.9988C78.9991 43.3685 76.3653 37.0098 71.6771 32.3215C66.9889 27.6333 60.6304 24.9994 54.0003 24.9994ZM54.0003 34.9992C55.97 34.9988 57.9206 35.3865 59.7405 36.14C61.5604 36.8935 63.2141 37.9981 64.6071 39.3907C66.0002 40.7833 67.1053 42.4367 67.8594 44.2564C68.6134 46.0761 69.0017 48.0265 69.0021 49.9963C69.0024 51.9661 68.6148 53.9166 67.8613 55.7366C67.1078 57.5566 66.0032 59.2103 64.6107 60.6034C63.2181 61.9964 61.5648 63.1016 59.7451 63.8557C57.9254 64.6098 55.975 64.9981 54.0053 64.9984C50.0273 64.9984 46.2122 63.4181 43.3993 60.6051C40.5863 57.7922 39.0061 53.9769 39.0061 49.9988C39.0061 46.0206 40.5863 42.2054 43.3993 39.3924C46.2122 36.5795 50.0273 34.9992 54.0053 34.9992M80.254 17.4996C78.5965 17.4996 77.0068 18.158 75.8348 19.3301C74.6628 20.5022 74.0043 22.0919 74.0043 23.7494C74.0043 25.407 74.6628 26.9967 75.8348 28.1687C77.0068 29.3408 78.5965 29.9993 80.254 29.9993C81.9115 29.9993 83.5011 29.3408 84.6732 28.1687C85.8452 26.9967 86.5037 25.407 86.5037 23.7494C86.5037 22.0919 85.8452 20.5022 84.6732 19.3301C83.5011 18.158 81.9115 17.4996 80.254 17.4996Z" fill="#2A614B" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_444_597" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_444_597" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_444_597" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <div className="grid">
                                <div className="text-[20px] pl-5">Instagram:</div>
                                <div className="text-[20px] pl-5">@numaconsulting</div>
                            </div>
                        </div>
                        <div className="flex items-center pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                                <g filter="url(#filter0_d_444_591)">
                                    <g clip-path="url(#clip0_444_591)">
                                        <path d="M80.5625 0H27.4375C14.4933 0 4 10.4933 4 23.4375V76.5625C4 89.5067 14.4933 100 27.4375 100H80.5625C93.5067 100 104 89.5067 104 76.5625V23.4375C104 10.4933 93.5067 0 80.5625 0Z" fill="#0A66C2" />
                                        <path d="M76.1543 85.0332H87.5879C88.0022 85.0332 88.3996 84.8686 88.6926 84.5757C88.9856 84.2828 89.1503 83.8854 89.1504 83.4711L89.1562 59.3141C89.1562 46.6879 86.4355 36.9828 71.6805 36.9828C66.0715 36.7742 60.782 39.6656 57.9277 44.4937C57.9138 44.5172 57.8925 44.5354 57.8672 44.5457C57.842 44.5559 57.814 44.5576 57.7877 44.5505C57.7613 44.5434 57.738 44.5278 57.7214 44.5062C57.7047 44.4846 57.6955 44.4581 57.6953 44.4309V39.7109C57.6953 39.2965 57.5307 38.8991 57.2377 38.6061C56.9446 38.3131 56.5472 38.1484 56.1328 38.1484H45.2824C44.868 38.1484 44.4706 38.3131 44.1776 38.6061C43.8845 38.8991 43.7199 39.2965 43.7199 39.7109V83.4688C43.7199 83.8831 43.8845 84.2806 44.1776 84.5736C44.4706 84.8666 44.868 85.0312 45.2824 85.0312H56.7152C57.1296 85.0312 57.5271 84.8666 57.8201 84.5736C58.1131 84.2806 58.2777 83.8831 58.2777 83.4688V61.8387C58.2777 55.7227 59.4379 49.7996 67.0203 49.7996C74.4949 49.7996 74.5918 56.798 74.5918 62.2348V83.4707C74.5918 83.8851 74.7564 84.2825 75.0494 84.5756C75.3425 84.8686 75.7399 85.0332 76.1543 85.0332ZM18.8438 23.2922C18.8438 27.9266 22.659 31.7398 27.2937 31.7398C31.9273 31.7395 35.7402 27.9238 35.7402 23.2902C35.7395 18.6566 31.9262 14.8438 27.2922 14.8438C22.657 14.8438 18.8438 18.6578 18.8438 23.2922ZM21.5621 85.0332H33.0102C33.4246 85.0332 33.822 84.8686 34.115 84.5756C34.408 84.2825 34.5727 83.8851 34.5727 83.4707V39.7109C34.5727 39.2965 34.408 38.8991 34.115 38.6061C33.822 38.3131 33.4246 38.1484 33.0102 38.1484H21.5621C21.1477 38.1484 20.7503 38.3131 20.4573 38.6061C20.1642 38.8991 19.9996 39.2965 19.9996 39.7109V83.4707C19.9996 83.8851 20.1642 84.2825 20.4573 84.5756C20.7503 84.8686 21.1477 85.0332 21.5621 85.0332Z" fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_444_591" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_444_591" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_444_591" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_444_591">
                                        <rect width="100" height="100" fill="white" transform="translate(4)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="grid">
                                <div className="text-[20px] pl-5">LinkedIN:</div>
                                <div className="text-[20px] pl-5">NUMA Consulting</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="relative">
                        <Image src="/images/person_with_phone.png" alt="background" className="object-cover object-center pr-10 z-30 relative bottom-5" width={570} height={380} />
                        <div className="absolute left-8 top-1 h-90 w-140 bg-green-500 z-10"></div>
                        <div className="absolute right-1 top-7 h-90 w-150 bg-green-200 z-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
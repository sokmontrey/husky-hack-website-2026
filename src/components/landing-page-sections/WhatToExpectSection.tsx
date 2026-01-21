import Image from "next/image";
import packResults from "../../assets/WhatToExpect/pack.png";
import trailHonour from "../../assets/WhatToExpect/trail_honours.png";
import scoutMentor from "../../assets/WhatToExpect/scout_mentor.png";

const WhatToExpectSection = () => {
    return (
        <div className="py-20 px-4 bg-[#0a192f] text-white">
            <h1 className="text-4xl font-bold text-center mb-16">What to Expect</h1>

            {/* Section 1: Networking, Prizes, Mentorship */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-16 w-full max-w-6xl mx-auto mb-32">
                {/* Card 1 */}
                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="relative w-48 h-32 mb-4">
                        <Image src={packResults} alt="Running with the pack" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#fbbf24] mb-2">Networking</h3>
                    <p className="text-gray-300 max-w-xs mx-auto">
                        Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology.
                    </p>
                </div>

                {/* Card 2 (Center - Lower) */}
                <div className="flex flex-col items-center flex-1 text-center mt-12 md:mt-16">
                    <div className="relative w-40 h-48 mb-4">
                        <Image src={trailHonour} alt="Trail Honours" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#fbbf24] mb-2">Prizes</h3>
                    <p className="text-gray-300 max-w-xs mx-auto">
                        Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="relative w-48 h-32 mb-4">
                        <Image src={scoutMentor} alt="Scout Mentor" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#fbbf24] mb-2">Mentorship</h3>
                    <p className="text-gray-300 max-w-xs mx-auto">
                        Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology.
                    </p>
                </div>
            </div>

            {/* Section 2: Hacker, Mentor, Sponsor Cards */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl mx-auto px-4">
                {/* Hacker Card */}
                <div className="bg-[#1e293b] rounded-3xl p-8 flex flex-col items-center text-center flex-1 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-[#92400e] mb-4 overflow-hidden relative flex items-center justify-center">
                        <Image src={packResults} alt="Hacker" className="object-cover" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 mb-4">Hacker</h3>
                    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                        This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-12 rounded-full transition-colors mt-auto w-full max-w-[200px]">
                        Apply
                    </button>
                </div>

                {/* Mentor Card */}
                <div className="bg-[#1e293b] rounded-3xl p-8 flex flex-col items-center text-center flex-1 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-[#92400e] mb-4 overflow-hidden relative flex items-center justify-center">
                        <Image src={packResults} alt="Mentor" className="object-cover" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 mb-4">Mentor</h3>
                    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                        This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-12 rounded-full transition-colors mt-auto w-full max-w-[200px]">
                        Apply
                    </button>
                </div>

                {/* Sponsor Card */}
                <div className="bg-[#1e293b] rounded-3xl p-8 flex flex-col items-center text-center flex-1 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 rounded-full bg-[#155e75] border-4 border-[#164e63] mb-4 overflow-hidden relative flex items-center justify-center">
                        <Image src={packResults} alt="Sponsor" className="object-cover" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 mb-4">Sponsor</h3>
                    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                        This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-12 rounded-full transition-colors mt-auto w-full max-w-[200px]">
                        Apply
                    </button>
                </div>
            </div>

        </div>
    );
};

export default WhatToExpectSection;
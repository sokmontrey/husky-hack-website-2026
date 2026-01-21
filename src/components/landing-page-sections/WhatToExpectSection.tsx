import Image, { StaticImageData } from "next/image";
import packResults from "../../assets/WhatToExpect/pack.png";
import trailHonour from "../../assets/WhatToExpect/trail_honours.png";
import scoutMentor from "../../assets/WhatToExpect/scout_mentor.png";

interface FeatureCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
}

const FeatureCard = ({ image, title, description, className = "", imageClassName = "" }: FeatureCardProps) => (
    <div className={`flex flex-col items-center flex-1 text-center w-fit ${className} border-2 border-[#92400e]`}>
        <div className={`w-full flex items-center justify-center`}>
            <Image src={image} alt={title} className={imageClassName} />
        </div>
        <h3 className="text-2xl font-bold text-[#fbbf24] mb-2">{title}</h3>
        <p className="text-gray-300 max-w-xs mx-auto">
            {description}
        </p>
    </div>
);

interface RoleCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    buttonText: string;
}

const RoleCard = ({ image, title, description, buttonText }: RoleCardProps) => (
    <div className="bg-[#1e293b] rounded-3xl p-8 flex flex-col items-center text-center flex-1 shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-[#92400e] mb-4 overflow-hidden relative flex items-center justify-center">
            <Image src={image} alt={title} className="object-cover" />
        </div>
        <h3 className="text-3xl font-bold text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 mb-4">{title}</h3>
        <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            {description}
        </p>
        <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-12 rounded-full transition-colors mt-auto w-full max-w-[200px]">
            {buttonText}
        </button>
    </div>
);

const WhatToExpectSection = () => {
    return (
        <div className="relative py-24 px-0 bg-[#0a192f] text-white overflow-hidden h-full">
            {/* Background  */}
            <div className="absolute top-0 left-0 h-full w-auto z-0 pointer-events-none">
                <Image
                    src={"/expectations/left_cave.svg"}
                    alt="Cave Left"
                    className="h-full w-auto object-cover"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            <div className="absolute top-0 right-0 h-full w-auto z-0 pointer-events-none">
                <Image
                    src={"/expectations/right_cave.svg"}
                    alt="Cave Right"
                    className="h-full w-auto object-cover"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            <h1 className="relative z-10 text-4xl font-bold text-center">What to Expect</h1>

            <div className="flex flex-col justify-evenly h-[200vh]">
                {/* Features */}
                <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-6xl mx-auto">
                    <FeatureCard
                        image={packResults}
                        title="Networking"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                    />

                    <FeatureCard
                        image={trailHonour}
                        title="Prizes"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                        className="mt-12 md:mt-16 md:translate-y-24"
                    />

                    <FeatureCard
                        image={scoutMentor}
                        title="Mentorship"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                    />
                </div>

                <h3 className="text-2xl font-bold text-center mt-12">And more along the journey...</h3>


                <h2 className="text-4xl font-bold text-center mt-12">How to Participate</h2>
                {/* Section 2: Hacker, Mentor, Sponsor Cards */}
                <div className="relative z-10 flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl mx-auto px-4">
                    <RoleCard
                        image={packResults}
                        title="Hacker"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />

                    <RoleCard
                        image={packResults}
                        title="Mentor"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />

                    <RoleCard
                        image={packResults}
                        title="Sponsor"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectSection;
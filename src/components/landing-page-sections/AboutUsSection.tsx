import Image from "next/image";
import huskyUseComputer from "../../assets/husky-use-computer.png";
import Underline1 from "../scribbles/Underline1";
import Star1 from "../scribbles/Star1";

export default function AboutUsSection() {
    return (
        <div id="About-Us" className="py-10 flex flex-row gap-2">
            <div className="flex flex-row gap-2">
                <Image
                    src={huskyUseComputer}
                    alt="Husky Use Computer"
                    className="h-3/4 mt-5"
                    width={400}
                    height={400}
                />

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row">
                        <div className="w-fit">
                            <h1 className="text-4xl font-serif">
                                About HuskyHack
                            </h1>
                            <Underline1 className="text-neutral-700 pl-4 py-2 pr-4" />
                        </div>
                        <Star1 className="text-sky-400 w-8 h-8 ml-4 -translate-y-5" />
                        <Star1 className="text-amber-500 w-5 h-6 -translate-y-1 rotate-3 -scale-x-100" />
                    </div>

                    <p className="text-sm text-gray-600 font-sans mt-2 mb-4">
                        Everyone has a story to tell. Turn yours into something
                        real alongside 100+ new friends in the heart of Toronto.
                    </p>
                    <p className="text-sm text-gray-600 font-sans">
                        Join us at HuskyHack on May 1st-2nd for a 24-hour
                        hackathon to build solutions that bring ideas to life.
                        We'll handle the space, food, and coffee; you just need
                        to bring a team, or join one when you get here.
                    </p>
                </div>
            </div>
        </div>
    );
}

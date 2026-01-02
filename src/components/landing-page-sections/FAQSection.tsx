import faqs from "../../data/faqs.json";
import Accordion from "../faq/Accordian";
import huskyPeekComputer from "../../assets/husky-peek-computer.png";
import Image from "next/image";

export default function FAQSection() {
    return (
        <section id="FAQ" className="py-40 pt-10">
            <h1 className="text-4xl font-serif text-center mb-10">FAQs</h1>

            <div className="grid grid-cols-[3fr_4fr] gap-4 w-full justify-center">
                <div className="justify-self-end flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-serif">?</h1>
                    <Image
                        src={huskyPeekComputer}
                        alt="Husky Peek Using Computer"
                        width={300}
                        height={300}
                        className="w-1/2"
                    />
                </div>

                <div className="flex flex-col gap-4 w-[70%]">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>

            {/*<div className="flex justify-center gap-12 px-8">
                <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                    <Accordion
                        title="When is it?"
                        answer="We’ll announce the official date soon. Stay tuned!"
                    />

                    <Accordion
                        title="Who can participate?"
                        answer="Anyone with an interest in technology, design, or innovation is welcome."
                    />

                    <Accordion
                        title="Is it beginner friendly?"
                        answer="Yes! We welcome participants of all skill levels."
                    />
                </div>

                <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                    <Accordion
                        title="How much does it cost?"
                        answer="The event is completely free to attend."
                    />

                    <Accordion
                        title="Do I need a team?"
                        answer="You can join solo or form a team at the event."
                    />

                    <Accordion
                        title="What should I bring?"
                        answer="Bring your laptop, charger, and enthusiasm!"
                    />
                </div>
            </div>*/}
        </section>
    );
}

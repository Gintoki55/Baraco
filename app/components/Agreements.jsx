import React from "react";

export const agreementsItems = [
    {
        name: "raysut osais",
        img: "/images/raysut-oasis.png",
        Link: "http://raysut-oasis.com",
    },
    {
        name: "turkey fish farms",
        img: "/images/turkey.png",
        Link: "https://turnkeyfishfarm.com",
    },
    {
        name: "Ashoka Group",
        img: "/images/Ashoka.png",
        Link: "https://www.ashokaengineering.com/turnkey-plant-manufacturers-india/",
    },
    {
        name: "Al Salaam Travel and Tourism",
        img: "/images/salaam.png",
        Link: null,
    },
];

function Agreements() {
    return (
        <section className="w-full py-10 shadow-sm">
            {/* Section Title */}
            <h2 className="sm:text-4xl text-2xl font-semibold text-blue-900 text-center mb-6">
                REPRESENTATION AGREEMENTS
            </h2>

            {/* Agreements List */}
            <div className="grid lg:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-10 px-4">
                {agreementsItems.map(({ name, img, Link }, index) => {
                    const isLastItem = index === agreementsItems.length - 1;
                    const imgSize = isLastItem
                        ? "sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]"
                        : "sm:w-[150px] sm:h-[150px] w-[120px] h-[120px]";

                    return Link ? (
                        <a
                            href={Link}
                            key={name}
                            className="transition-transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <figure className="flex flex-col items-center">
                                <img
                                    src={img}
                                    alt={name}
                                    className={`object-contain opacity-90 hover:opacity-100 transition-all ${imgSize}`}
                                />
                            </figure>
                        </a>
                    ) : (
                        <div
                            key={name}
                            className="transition-transform cursor-not-allowed hover:scale-105"
                        >
                            <figure className="flex flex-col items-center">
                                <img
                                    src={img}
                                    alt={name}
                                    className={`object-contain transition-all ${imgSize}`}
                                />
                            </figure>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Agreements;

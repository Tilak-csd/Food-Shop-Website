import React from 'react'
import { motion } from "framer-motion";

export default function Destination() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <section id="reservation" className="min-h-screen w-full grid grid-rows-[auto_auto_1fr]">

            {/* Heading */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center font-bold text-3xl md:text-4xl xl:text-5xl mt-16"
            >
                A DESTINATION
            </motion.h1>

            {/* Description */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-3xl mx-auto text-center leading-relaxed text-gray-600 px-4 mt-6"
            >
                We serve as a premier destination offering a refined environment for discerning patrons.
                Our space is thoughtfully curated to support productivity, meaningful conversations,
                and the enjoyment of high-quality artisan beverages.
            </motion.p>

            {/* Image Section */}
            <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full h-full bg-cover bg-center mt-10"
                style={{ backgroundImage: "url('./destination.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-20 h-full flex flex-col items-center justify-center gap-7 px-4"
                >
                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                        className="section-heading-title text-white"
                    >
                        EAT TOGETHER
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white/90 max-w-2xl text-lg"
                    >
                        Every plate achieves that exclusive, cuisine-defining balance of sweet,
                        salty, and sour delight.
                    </motion.p>

                    <motion.button
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="curved-button">
                        Make a Reservation
                    </motion.button>
                </motion.div>
            </motion.div>

        </section>
    );
}

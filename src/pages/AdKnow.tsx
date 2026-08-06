import { useEffect } from "react";
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ProjectPreviewGallery from "../components/ProjectPreviewGallery";

// Icon imports
import { SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaChevronLeft, FaFigma } from "react-icons/fa";

// Image imports
import previewAdKnow1 from "../assets/projects_preview/adknow1.png";
import previewAdKnow2 from "../assets/projects_preview/adknow2.png";

function AdKnow() {
    // Fix for refresh 40px scrolling issue
    useEffect(() => {
        if (!("scrollRestoration" in history)) return;

        history.scrollRestoration = "manual";

        window.scrollTo({
            top: 0,
            behavior: "instant",
        });

        return () => {
            history.scrollRestoration = "auto";
        };
    }, []);

    const navigate = useNavigate();

    return (
        <main className="
            flex
            flex-col
            justify-start
            items-center
            gap-[400px]
            px-[50px]
            pb-[200px]
            min-h-screen
            bg-background
        ">
            {/* Navigation Bar */}
            <nav className="
                fixed
                top-0
                z-50
                flex
                flex-row
                justify-center
                sm:justify-end
                items-center
                gap-[50px]
                w-full
                px-[50px]
                py-[25px]
                bg-background
            ">
                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#about")}
                >
                    About
                </p>

                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#projects")}
                >
                    Projects
                </p>

                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#contact")}
                >
                    Contact
                </p>
            </nav>

            {/* Main Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 0.75,
                    ease: "easeOut",
                }} 
                className="
                    flex
                    flex-col
                    items-center
                    gap-[50px]
                    mt-[225px]
                    w-full
                    max-w-[1280px]
            ">

                {/* Header */}
                <div className="
                    flex
                    flex-row
                    justify-start
                    items-center
                    gap-[20px]
                    w-full
                ">
                    <FaChevronLeft
                    size={30}
                    className="
                        surface-surface
                        cursor-pointer
                    "
                    onClick={() => navigate("/#projects")}
                    />

                    <h2 className="
                        accent-accent
                        self-start
                    ">
                        AdKnow<span className="surface-surface">;</span>
                    </h2>
                </div>

                {/* Middle Section */}
                <div className="
                    flex
                    flex-col
                    xl:flex-row
                    justify-between
                    items-start
                    gap-[50px]
                    w-full
                ">
                    <div className="
                        w-full
                        min-w-[450]
                        max-h-[505.69px]
                        lg:min-w-[899.78px]
                        border-[2px]
                        border-solid
                        rounded-[15px]
                        overflow-hidden
                        surface-surface
                    ">
                        <ProjectPreviewGallery
                            images={[
                                previewAdKnow1,
                                previewAdKnow2,
                            ]}
                        />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[50px]
                        xl:gap-[20px]
                        w-full
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-[10px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Project Classification
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Academic Project
                            </p>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[10px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Role
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Front-end Developer and Designer
                            </p>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[20px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Tech Stack
                            </p>

                            <div className="
                                grid
                                grid-cols-3
                                gap-[50px]
                            ">
                                <FaHtml5
                                size={50}
                                className="surface-surface"
                                />

                                <FaCss3Alt
                                size={50}
                                className="surface-surface"
                                />

                                <SiJavascript
                                size={50}
                                className="surface-surface"
                                />

                                <FaFigma
                                size={50}
                                className="surface-surface"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="
                    flex
                    flex-col
                    self-start
                    gap-[50px]
                    w-full
                    max-w-[899.78px]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Overview
                        </p>

                        <p className="
                            text-[20px]
                            font-[400]
                            text-text
                        ">
                            AdKnow is a school chatbot platform designed to assist students in navigating through technical processes and procedures within the university and in offering general school-related information. 
                        </p>
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Responsibilities
                        </p>

                        <ul className="
                            text-[20px]
                            font-[400]
                            text-text
                            list-disc
                            list-inside
                            pl-3
                        ">
                            <li>Designed the front-end interface using <span className="surface-surface">Figma</span>.</li>
                            <li>Implemented the front-end interface and logic using <span className="surface-surface">HTML, CSS, and JavaScript</span>.</li>
                        </ul>
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Key Features
                        </p>

                        <ul className="
                            text-[20px]
                            font-[400]
                            text-text
                            list-disc
                            list-inside
                            pl-3
                        ">
                            <li><span className="surface-surface">User Authentication Interface</span> for both registering and signing in accounts.</li>
                            <li><span className="surface-surface">Message Recommendations</span> in the home page for suggesting commonly asked questions based on their category.</li>
                            <li><span className="surface-surface">Responsive Messaging Interface</span> for dynamically displaying messages within conversations.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}

export default AdKnow;
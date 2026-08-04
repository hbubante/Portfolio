import { useEffect } from "react";

import Button from "@mui/material/Button"
import { TextField } from "@mui/material";
import './App.css';
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { SiJavascript, SiTypescript, SiPython, SiDotnet, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaArrowRight } from "react-icons/fa";
import Csharp from "./assets/csharp.png";
import Cplusplus from "./assets/cplusplus.png";
import C from "./assets/c.png";

// Image imports
import previewSteamStats from "./assets/projects_preview/steamstats1.png";
import previewBTrNPMS from "./assets/projects_preview/btrnpms1.png";
import previewAppointMed from "./assets/projects_preview/appointmed1.png";
import previewAdKnow from "./assets/projects_preview/adknow1.png";
import previewProjectPASIL from "./assets/projects_preview/projectpasil1.png";

const imageVariants = {
        rest: {
            scale: 1,
            filter: "brightness(1)",
        },
        hover: {
            scale: 1.05,
            filter: "brightness(0.9)",
        },
    };

const contentVariants = {
    rest: {
        y: 0,
    },
    hover: {
        y: -3,
    },
};

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section)
        return;

    // Editable top margin when scrolling section into view; Adjust as needed when editing probably
    const scrollMargin = 250;

    const y = section.getBoundingClientRect().top + window.scrollY - scrollMargin;

    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
};

const GITHUB_URL = "https://github.com/hbubante";
const LINKEDIN_URL = "https://www.linkedin.com/in/hbubante/";
const RESUME_URL = "/Ubante_Resume.pdf";

const openExternal = (platform: string) => {
    window.open(platform, "_blank", "noopener,noreferrer");
};

function App() {
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
                    onClick={() => scrollToSection("about")}
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
                    onClick={() => scrollToSection("projects")}
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
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </p>
            </nav>

            {/* Landing Content */}
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
                    items-left
                    gap-[50px]
                    mt-[225px]
                    w-full
                    max-w-[1280px]
            ">
                <h1 className="
                    accent-accent
                ">
                    hey there<span className="surface-surface">;</span>
                </h1>

                <p className="
                    max-w-[750px]
                    text-[24px]
                    font-[400]
                    text-text
                ">
                    I'm Hans, and i like turning ideas into software. I build web systems, explore new technologies, and enjoy the process of crafting solutions from conceptual ideas.
                </p>

                <Button
                    sx={{
                        width: 175,
                        height: 50,
                        border: 2,
                        borderColor: "#DCBAB5",
                        borderRadius: 3,
                        color: "#DCBAB5",
                        fontFamily: "'Inter Variable', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                    onClick={() => scrollToSection("contact")}
                >
                    Contact Me
                </Button>
            </motion.div>

            {/* About Section */}
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
                    lg:flex-row
                    justify-between
                    items-stretch
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="about"
            >
                <div className="
                    flex
                    flex-col
                    gap-[50px]
                ">
                    <h2 className="
                        accent-accent
                    ">
                        about me<span className="surface-surface">;</span>
                    </h2>

                    <p className="
                        max-w-[638px]
                        text-[20px]
                        font-[400]
                        text-text
                    ">
                        I am a Computer Science graduate focusing on full-stack development and currently specializing in React and .NET, among other technologies. I have hands-on experience with systems development through internship, academic, and practical projects.
                    </p>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none'
                            }}
                            onClick={() => openExternal(RESUME_URL)}
                        >
                            View Resume
                        </Button>

                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none'
                            }}
                            onClick={() => openExternal(GITHUB_URL)}
                        >
                            View GitHub
                        </Button>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-[50px]
                ">
                    <div className="
                        flex
                        flex-row
                        items-center
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <FaReact
                        size={50}
                        className="surface-surface"
                        />

                        <FaHtml5
                        size={60}
                        className="surface-surface"
                        />

                        <FaCss3Alt
                        size={60}
                        className="surface-surface"
                        />

                        <SiJavascript
                        size={50}
                        className="surface-surface"
                        />

                        <SiTypescript
                        size={50}
                        className="surface-surface"
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <SiPython
                        size={50}
                        className="surface-surface"
                        />

                        <img 
                            src={Csharp}
                            style={{ width: "50px", height: "50px" }} 
                        />

                        <FaJava
                        size={50}
                        className="surface-surface"
                        />

                        <img 
                            src={Cplusplus}
                            style={{ width: "50px", height: "50px" }} 
                        />

                        <img 
                            src={C}
                            style={{ width: "50px", height: "50px" }} 
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <SiDotnet
                        size={50}
                        className="surface-surface"
                        />

                        <SiPostgresql
                        size={50}
                        className="surface-surface"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Projects Section */}
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
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="projects"
            >
                <h2 className="
                    accent-accent
                ">
                    projects i've worked on<span className="surface-surface">;</span>
                </h2>

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-[50px]
                ">
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                    ">
                        <motion.img 
                            src={previewSteamStats}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                SteamStats
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                    ">
                        <motion.img 
                            src={previewBTrNPMS}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                BTr NPMS
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                    ">
                        <motion.img 
                            src={previewAppointMed}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                AppointMed
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                    ">
                        <motion.img 
                            src={previewAdKnow}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                AdKnow
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                    ">
                        <motion.img 
                            src={previewProjectPASIL}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                Project PASIL
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    
                </div>
                
            </motion.div>

            {/* Contact Section */}
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
                    xl:flex-row
                    justify-between
                    items-stretch
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="contact"
            >
                <div className="
                    flex
                    flex-col
                    gap-[50px]
                    w-full
                ">
                    <h2 className="
                        accent-accent
                    ">
                        contact me<span className="surface-surface">;</span>
                    </h2>

                    <p className="
                        max-w-[638px]
                        text-[20px]
                        font-[400]
                        text-text
                    ">
                        If you wish to reach out, you may fill out the form to send a message. Alternatively, you can also find me on the following platforms:
                    </p>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none'
                            }}
                            onClick={() => openExternal(LINKEDIN_URL)}
                        >
                            LinkedIn
                        </Button>

                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none'
                            }}
                            onClick={() => openExternal(GITHUB_URL)}
                        >
                            GitHub
                        </Button>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    justify-start
                    items-center
                    pt-[25px]
                    gap-[20px]
                    w-full
                ">
                    <p className="
                        max-w-[638px]
                        text-[24px]
                        font-[600]
                        accent-accent
                    ">
                        Send a Message
                    </p>

                    <TextField
                        label="Name"
                        variant="outlined"
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                height: "50px",
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                },
                            },

                            "& input": {
                                color: "#FFFFFF",
                                padding: "0 16px",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },
                        }}
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                height: "50px",
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                },
                            },

                            "& input": {
                                color: "#FFFFFF",
                                padding: "0 16px",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },
                        }}
                    />

                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },
                            },

                            "& textarea": {
                                color: "#FFFFFF",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },

                            "& textarea::-webkit-scrollbar": {
                                width: "6px",
                            },

                            "& textarea::-webkit-scrollbar-thumb": {
                                backgroundColor: "#DCBAB5",
                                borderRadius: "999px",
                            },
                        }}
                    />

                    <Button sx={{
                        width: 175,
                        height: 50,
                        border: 2,
                        borderColor: "#DCBAB5",
                        borderRadius: 3,
                        color: "#DCBAB5",
                        fontFamily: "'Inter Variable', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        textTransform: 'none'
                    }}>
                        Submit
                    </Button>
                </div>
            </motion.div>
        </main>
    )
}

export default App
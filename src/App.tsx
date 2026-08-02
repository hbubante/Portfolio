import Button from "@mui/material/Button"
import './App.css';
import '@fontsource-variable/inter';

import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, SiDotnet, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from "react-icons/fa";
import Csharp from "./assets/csharp.png";
import Cplusplus from "./assets/cplusplus.png";
import C from "./assets/c.png";

function App() {

    return (
        <main className="
        flex
        flex-col
        justify-start
        items-center
        gap-[300px]
        pb-[200px]
        min-h-screen
        bg-background
        font
        ">
            <nav className="
                fixed
                top-0
                z-50
                flex
                flex-row
                justify-end
                items-center
                gap-[50px]
                w-full
                px-[100px]
                py-[50px]
                bg-background
            ">
                <p className="
                text-[32px]
                font-[600]
                surface-surface
                cursor-pointer
                transition-opacity
                duration-300

                hover:opacity-75
                ">
                    About
                </p>

                <p className="
                text-[32px]
                font-[600]
                surface-surface
                cursor-pointer
                transition-opacity
                duration-300

                hover:opacity-75
                ">
                    Projects
                </p>

                <p className="
                text-[32px]
                font-[600]
                surface-surface
                cursor-pointer
                transition-opacity
                duration-300

                hover:opacity-75
                ">
                    Contact
                </p>
            </nav>

            <div className="
            flex
            flex-col
            items-left
            gap-[50px]
            mt-[200px]
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
                text-[32px]
                font-[400]
                text-text
                ">
                    I'm Hans, and i like turning ideas into software. I build web systems, explore new technologies, and enjoy the process of crafting solutions from conceptual ideas.
                </p>

                <Button sx={{
                width: 200,
                height: 65,
                border: 2,
                borderColor: "#DCBAB5",
                borderRadius: 3,
                color: "#DCBAB5",
                fontFamily: "'Inter Variable', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                textTransform: 'none'
                }}>
                    Contact Me
                </Button>
            </div>

            <div className="
            flex
            flex-row
            justify-between
            items-stretch
            gap-[50px]
            w-full
            max-w-[1280px]
            ">
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
                    text-[24px]
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
                        <Button sx={{
                        width: 200,
                        height: 65,
                        border: 2,
                        borderColor: "#DCBAB5",
                        borderRadius: 3,
                        color: "#DCBAB5",
                        fontFamily: "'Inter Variable', sans-serif",
                        fontSize: 20,
                        fontWeight: 600,
                        textTransform: 'none'
                        }}>
                            View Resume
                        </Button>

                        <Button sx={{
                        width: 200,
                        height: 65,
                        border: 2,
                        borderColor: "#DCBAB5",
                        borderRadius: 3,
                        color: "#DCBAB5",
                        fontFamily: "'Inter Variable', sans-serif",
                        fontSize: 20,
                        fontWeight: 600,
                        textTransform: 'none'
                        }}>
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
                        gap-[50px]
                    ">
                        <FaReact
                        size={75}
                        className="surface-surface"
                        />

                        <FaHtml5
                        size={85}
                        className="surface-surface"
                        />

                        <FaCss3Alt
                        size={85}
                        className="surface-surface"
                        />

                        <SiJavascript
                        size={75}
                        className="surface-surface"
                        />

                        <SiTypescript
                        size={75}
                        className="surface-surface"
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <SiPython
                        size={75}
                        className="surface-surface"
                        />

                        <img 
                            src={Csharp}
                            style={{ width: "75px", height: "75px" }} 
                        />

                        <FaJava
                        size={75}
                        className="surface-surface"
                        />

                        <img 
                            src={Cplusplus}
                            style={{ width: "75px", height: "75px" }} 
                        />

                        <img 
                            src={C}
                            style={{ width: "75px", height: "75px" }} 
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <SiDotnet
                        size={75}
                        className="surface-surface"
                        />

                        <SiPostgresql
                        size={75}
                        className="surface-surface"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
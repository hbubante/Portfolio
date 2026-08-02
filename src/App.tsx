import Button from "@mui/material/Button"
import './App.css';
import '@fontsource-variable/inter';

function App() {

    return (
        <main className="
        flex
        flex-col
        items-center
        min-h-screen
        bg-background
        font
        ">
        <div className="
            flex
            flex-row
            justify-end
            items-center
            gap-[50px]
            w-full
            px-[100px]
            py-[50px]
            border-1
            border-solid
            border-white
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
        </div>
        <div className="
        flex
        flex-col
        items-left
        gap-[50px]
        w-full
        max-w-[1280px]
        border-1
        border-solid
        border-white
        ">
            <h1 className="
            accent-accent
            ">
            hey there;
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
        </main>
    )
}

export default App
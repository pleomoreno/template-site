import { useTheme } from "../hooks/useTheme";


interface CardProp {
    imagem: string;
    name: string;
    github: string;
}

export default function Card({imagem, name, github}: CardProp){

    const {darkTheme, toggleDarkTheme} = useTheme()
    
    return(
        <div className={`${darkTheme ? "bg-black/50": "bg-black/5"} duration-300
        h-20 p-2 w-2/5 rounded-full shadow-md gap-4 flex items-center`}
            onClick={toggleDarkTheme}>
            <div>
                <img src={imagem} alt="" className="rounded-full h-[60px] w-[60px]"/>
            </div>
            <div className={`${darkTheme ? "text-white" : "text-black"} text-3xl font-thin`}>
                {name}
            </div>
        </div>
    )
}
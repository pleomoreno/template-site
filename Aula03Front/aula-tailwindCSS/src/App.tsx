import { useEffect, useState } from "react"
import Card from "./components/card"
import { Profile, useProfile } from "./hooks/useProfile"
import { useTheme } from "./hooks/useTheme"


function App() {
  const [usuarios, setUsuarios] = useState<Profile[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const {fetchProfile} = useProfile()
  const {darkTheme} = useTheme()

  const fetchData = async () =>{
    setLoading(true)
    const data = await fetchProfile()
    setUsuarios(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
}, [])

  return (
    <div className={`${darkTheme ? "bg-black/90" : "bg-white"} duration-300 h-screen w-full justify-center items-center flex flex-col gap-4`}>
      { loading ? (
        <div>
          <div className="rounded-full h-20 w-20 border-10 border-dotted animate-spin"/>
        </div>
      )
      :
        (usuarios.map((usuario, index) => (
          <Card 
            imagem={usuario.imagem}
            name={usuario.name}
            github={usuario.github}
          />
        )))}
    </div>
  )
}

export default App
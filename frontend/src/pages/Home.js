import { useEffect,useState } from "react"
//components
import ComponentDetails from '../components/ComponentDetails'
const Home=()=>{
    const [components,setComponents]=useState(null)
    useEffect(()=>{
        const fetchComponents=async ()=>{     
            const response=await fetch('/api/components')
            const json=await response.json()
            
            if (response.ok){
                setComponents(json)
            }
        }
        fetchComponents()
    },[])
    
    return(
        <div className="home">
            <div className="components">
                {components && components.map((component)=>(
                    <ComponentDetails key={component._id} component={component}/>
                ))}
            </div>
        </div>
    )
    }
export default Home
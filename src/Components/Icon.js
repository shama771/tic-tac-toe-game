// import react from "react"
import { FaTimes,FaRegCircle,FaPen } from "react-icons/fa";

const Icon = (design) => {
    if(design.icon == "circle"){
        return <FaRegCircle />
    }
    else if(design.icon ==  "cross"){
        return <FaTimes />
    }
    else {
        
            return <FaPen />
        }

    }
    // return <FiAtSign />;


export default Icon;


import NavigationContext from "../contexts/navigation";
import { useContext } from "react";

const useNavigate = () => {
    return useContext(NavigationContext);
}

export default useNavigate;
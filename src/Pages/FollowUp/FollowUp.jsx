import Header from "../../Components/Header/Header";
import Phases from "../../Components/Phases/Phases";
import { ContainerFollowUp } from "./Styles"
import { useNavigate } from 'react-router-dom';


const FollowUp= () => {
   
    const navigate = useNavigate();
    const handleBackButtonClick = () => {
        navigate(-1); 
    };

    return(
        <>
            
            <Header showButton={false} showBackButton={true} onBackButtonClick={handleBackButtonClick} />
            <ContainerFollowUp>
                <Phases></Phases>
            </ContainerFollowUp>
        
        </>
    ) 
}

export default FollowUp;
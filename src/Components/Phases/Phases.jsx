import { ContainerPhases } from "./Styles";
import IconCheck from "../../Img/Vector.png";
import data from "../../data.json";

const Phases = () => {
    console.log(data);
    return(
        <ContainerPhases>
            <div className="circle">
                <img src={IconCheck}/>
            </div>

            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
        </ContainerPhases>
    ) 
}

export default Phases;
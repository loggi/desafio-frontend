import React, {useState} from 'react';
import { ContainerPhases, SectionTable, Container } from "./Styles";
import IconCheck from "../../Img/Vector.png";
import IconAirplane from "../../Img/Airplane.png";
import IconTime from "../../Img/Time.png";
import IconHouse from "../../Img/House.png";
import data from "../../data.json";
import { getItens } from '../../LocalStorage';

const Phases = () => {

    

    const idTrack = getItens();
    const findValue = data.pedidos.find((item) => item.id === idTrack);
    // const [colorCircle, setColorCircle] = useState(findValue.status);
    console.log(findValue.id);


    return(
        <Container>
            <ContainerPhases>
                <div className="circle">
                    <img src={IconCheck}/>
                </div>
                <div className="line"></div>
                <div className="circle">
                    <img src={IconAirplane}/>
                </div>
                <div className="line"></div>
                <div className="circle">
                    <img src={IconTime}/>
                </div>
                <div className="line"></div>
                <div className="circle">
                    <img src={IconHouse}/>
                </div>
            </ContainerPhases>
                <SectionTable>
                    <table border="1">
                        <tr>
                            <th>Data/Hora</th>
                            <th>Status</th>
                            <th>De</th>
                            <th>Para</th>
                        </tr>
                        

                        {findValue.historicoStatus.map((item) => (
                            <tr>
                                <td>{item.dataStatus}</td>
                                <td>{item.status}</td>
                                <td>{findValue.localOrigem.cidade}</td>
                                <td>{findValue.localEntrega.cidade}</td>
                            </tr>
                        ))}
                        
                    </table>
                </SectionTable>
                
            
            
        </Container>
    ) 
}

export default Phases;
import React from 'react';
import { ContainerPhases, SectionTable, Container } from "./Styles";
import IconCheck from "../../Img/Vector.png";
import IconAirplane from "../../Img/Airplane.png";
import IconTime from "../../Img/Time.png";
import IconHouse from "../../Img/House.png";
import data from "../../data.json";

const Phases = () => {

    console.log(data);
    console.log(data.pedidos[0]);
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
                        

                        {data.pedidos[0].historicoStatus.map((item) => (
                            <tr>
                                <td>{item.dataStatus}</td>
                                <td>{item.status}</td>
                                <td>{data.pedidos[0].localOrigem.cidade}</td>
                                <td>{data.pedidos[0].localEntrega.cidade}</td>
                            </tr>
                        ))}
                        
                    </table>
                </SectionTable>
                
            
            
        </Container>
    ) 
}

export default Phases;
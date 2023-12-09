'use client'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { VerticalLinearStepper } from './Stepper';

import { data } from '../../../app/api/controller'
import { useState, useEffect, Key } from 'react'
import { LoadingMessage } from '../Loading';

import { DataInfo, DataStatus } from '../../../interfaces';

import style from './Rastreador.module.sass'
import { NotFound } from '../NotFound';

export const Rastreador = ({ code }: { code: string }) => {

    const [trackerData, setTrackerData] = useState<any>(false)

    useEffect(() => {
        (async (ref:string) => {
            const requestData = await data(ref)
            setTrackerData(requestData);
        }) (code)
    }, [])

    const CardInformation = ({dataInfo, title}: {dataInfo: DataInfo, title: string}) => {
        return (
            <Card
                variant="outlined" 
                sx={{ maxWidth: '90%', mb: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        <ul>
                            <li><strong>Name:</strong> { dataInfo.name }</li>
                            <li><strong>Address:</strong> { dataInfo.address }, {dataInfo.number} { dataInfo.complementary }</li>
                            <li><strong>Cidade:</strong> { dataInfo.city } - { dataInfo.UF }</li>
                            <li><strong>CEP:</strong> { dataInfo.zip }</li>
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }

    return (
        <section className={style.rastreador}>
            <div className='grid'>
                <div className={style.status}>
                    { 
                        trackerData 
                            ?   trackerData.length 
                                ? (
                                    <>
                                        <div className={style.box}>
                                            <Typography variant="h5"  sx={{  mb: 2 }}>
                                                CODE: { code }
                                            </Typography>

                                            {
                                                trackerData?.map((e: { id: Key, receiver: DataInfo; sender: DataInfo; }) => (
                                                        <>
                                                            <CardInformation key={ e.id } dataInfo={ e.receiver } title="Destiny Information" />
                                                            <CardInformation key={ e.id } dataInfo={ e.sender } title="Sender Information" />
                                                        </>
                                                    )
                                                )
                                            }
                                        </div>
                                        { trackerData?.map((e: { status: DataStatus }) => <VerticalLinearStepper status={ e.status }/>) }
                                    </>
                                )
                                : <NotFound />
                            :
                            <LoadingMessage />
                    }

                </div>
                
            </div>
            
        </section>
    )
}
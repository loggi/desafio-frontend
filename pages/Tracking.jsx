import * as React from 'react';
import { Typography } from '@mui/material';
import Header from '../src/Components/Header';
import TrackingInfo from '../src/Components/TrackingInfo';
import Footer from '../src/Components/Footer';
import { getItem } from '../src/storage';

export default function Tracking() {
    const getId = getItem("id");
    return (
        <>
            <Header />
            <Typography variant="h4" component="h3" sx={{
                background: "#006AFF",
                color: "#ffffff",
                textAlign: "center",
                padding: "20px",
            }}>
                Detalhes do rastreio
            </Typography>
            {getId && (
                <TrackingInfo trackingId={getId} />
            )}
            <Footer />
        </>
    );
}
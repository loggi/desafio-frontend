import * as React from 'react';
import Header from '../src/Components/Header';
import TrackingInfo from '../src/Components/TrackingInfo';
import Footer from '../src/Components/Footer';
import { getItem } from '../src/storage';
import Head from '../src/Components/Head';

export default function Tracking() {
    const getId = getItem("id");
    return (
        <>
            <Header />
            <Head tracking />
            {getId && (
                <TrackingInfo trackingId={getId} />
            )}
            <Footer />
        </>
    );
}
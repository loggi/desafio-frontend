import React from 'react'
import { Header } from '../../../components/header'
import { Rastreador } from '../../../components/content/Rastreador'

export default function Page({ params }: { params: { code: string } }) {
    return (
        <>
            <Header />
            <Rastreador code={params.code} />
        </>
    )
}
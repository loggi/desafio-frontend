'use client'

import { useState } from 'react';

const useTrackingCode = code => {

    const [packageTracker, setPackageTracker] = useState({
        "eta": 1677251584,
        "packageInfo": {
            "packageId": 275314784,
            "trackingKey": code,
            "companyName": "LOGGI TECNOLOGIA LTDA.",
            "companyHash": "738eb47729"
        },
        "redispatchInfo": {
            "trackingCode": null,
            "maxPickupTime": null
        },
        "currentStatus": {
            "error": null,
            "inProgress": false,
            "destination": "RECIPIENT",
            "type": "d"
        },
        "shipperStatus": {
            "code": 5,
            "label": "Entregue",
            "description": "O pacote chegou ao destino final.",
            "actionRequired": {
                "reasonLabel": "Entregue",
                "reasonDescription": "O pacote chegou ao destino final."
            }
        },
        "destinationInfo": {
            "firstLine": "Rua Est\u00e1*** ** *\u00e1, ****"
        },
        "canAuthenticate": true
    })

    function enableDestinationInfo(doc) {
        if(!doc) return;
        
        setPackageTracker({
            ...packageTracker,
            destinationInfo: {
                ...packageTracker.destinationInfo,
                firstLine: "Rua Estácio de Sá, 1234"
            }
        })
    }

    return {
        packageTracker,
        enableDestinationInfo
    }
}

export default useTrackingCode
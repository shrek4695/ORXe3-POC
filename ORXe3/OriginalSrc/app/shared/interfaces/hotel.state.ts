export interface Hotel {
    id: number,
    name: string,
    displayFare: {},
    purchaseOption: {},
    content: {},
    distanceKm: number,
    supplierId: string,
    refundability: {
        "enum": [
           "Refundable",
           "NonRefundable",
           "Unknown"
        ]
    }
}
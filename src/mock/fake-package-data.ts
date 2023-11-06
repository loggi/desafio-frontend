const fakePackageData = [
  {
    id: "1",
    trackingNumber: "TRK123456789",
    origin: "São Paulo, SP",
    destination: "Rio de Janeiro, RJ",
    estimatedDeliveryDate: "2023-11-10",
    status: "Delivered",
    currentLocation: "Rio de Janeiro, RJ",
    shipmentType: "Standard",
    userCpf: "000.111.222-33",
    items: [
      {
        name: "Product A",
        quantity: 2,
        weight: "2 kg",
        description: "Electronics",
      },
      {
        name: "Product B",
        quantity: 3,
        weight: "3.5 kg",
        description: "Clothing",
      },
    ],
  },
  {
    id: "2",
    trackingNumber: "TRK987654321",
    origin: "Belo Horizonte, MG",
    destination: "São Paulo, SP",
    estimatedDeliveryDate: "2023-11-15",
    status: "In Transit",
    currentLocation: "Campinas, SP",
    shipmentType: "Express",
    userCpf: "000.111.222-33",
    items: [
      {
        name: "Product C",
        quantity: 1,
        weight: "1.5 kg",
        description: "Clothing",
      },
      {
        name: "Product D",
        quantity: 4,
        weight: "5.0 kg",
        description: "Electronics",
      },
    ],
  },
  {
    id: "3",
    trackingNumber: "TRK567890123",
    origin: "Curitiba, PR",
    destination: "Florianópolis, SC",
    estimatedDeliveryDate: "2023-11-14",
    status: "Out for Delivery",
    currentLocation: "Joinville, SC",
    shipmentType: "Standard",
    userCpf: "000.111.222-33",
    items: [
      {
        name: "Product E",
        quantity: 1,
        weight: "2.0 kg",
        description: "Household Goods",
      },
      {
        name: "Product F",
        quantity: 2,
        weight: "2.5 kg",
        description: "Furniture",
      },
    ],
  },
];

export { fakePackageData };

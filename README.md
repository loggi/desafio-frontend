# Order Tracker Application

This application simulates a simple order tracker. It's built with [NextJS](https://nextjs.org/), [Tailwindcss](https://tailwindcss.com/), and [Material UI](https://mui.com/material-ui/).

## Repository Pattern

This application uses the **Repository Pattern** to simulate an external API. The `src/pages/repositories/InMemoryRepository.js` file has an in memory database called **orders**.

## API

You can find the API endpoint responsible for providing the order information on `src/pages/api/order.js`

## Videos

https://github.com/darde/order-tracker/assets/24977035/16e5a3f1-c268-4e4c-aec7-75131ddb82fa

## Running the application

To run the application you need to install the dependencies and start the **dev** script as below:

```bash
npm install

npm run dev
```

## Running the tests

You can run the unit test with the command:

```bash
npm run test
```





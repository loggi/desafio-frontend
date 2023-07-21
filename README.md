# Tracking Page - Loggi

The Tracking Page is an essential area of Loggi's Website that provides users with the ability to track their packages and stay informed about their delivery status. With this feature, users can easily monitor the progress of their shipments and know exactly when to expect their packages.

## Table of Contents
- [Testing the Application](#testing-the-application)
- [User Stories](#user-stories)
- [API Mock](#api-mock)
- [Accessibility](#accessibility)
- [Help Page](#help-page)
- [Tracking Status Details](#tracking-status-details)
- [Technical Considerations](#technical-considerations)

## Testing the Application

To test the application's functionality, you can access our [Tracking Page](https://loggi-tracking.vercel.app/TrackingHelp) and use one of the following mock tracking codes: ```1, 2, or 3```. Each tracking code will produce different results to showcase the informative error handling capabilities of the application.

## User Stories

In this section, we present some of the user stories that have guided the development of the order tracking feature in the Loggi application:

1. **As an Amazon customer, I want a page where I can view the delivery forecast for a product that will be delivered by Loggi, so I can be prepared to receive it.**

   As an Amazon customer, having access to the delivery forecast is essential to ensure that I am available to receive the product at the time of delivery. This way, I can plan my schedule and be prepared to receive the order conveniently and securely.

2. **As a freelance seller, I want to track the status of the delivery process for an order to ensure that I know when my customer will receive the order.**

   As a freelance seller, it is crucial for me to be informed about the status of the delivery process for each order I send. This will allow me to provide accurate information to my customers about the estimated arrival time and ensure that they have a great experience with the delivery service.

3. **As a first-time customer of Loggi's services, I want more detailed information to help me find the tracking code and understand the status of delivery updates.**

   As a new customer of Loggi's services, it is important that I have access to clear and detailed information about tracking my package. Knowing where to find the tracking code and understanding the different delivery update statuses will help me track the shipping process efficiently and smoothly.

Based on these user stories, we have developed the order tracking functionality to provide the best possible experience for our customers. Our goal is to offer an intuitive and accessible platform, ensuring that all users can easily track their orders with confidence.


## API Mock

This application leverages an API mock, which allows for seamless testing and development without relying on a live API. The API mock provides realistic responses and data to simulate real-world scenarios, ensuring a smooth user experience.

Feel free to explore the Tracking Page and experience the convenience of tracking your packages with ease. If you encounter any issues or have any feedback, don't hesitate to reach out to us. We are continuously improving our services to provide you with the best experience possible.

Thank you for using Loggi's Tracking Page!

## Accessibility

At Loggi, we believe in the importance of accessibility for all users. In designing this website, we have taken care to ensure that the information presented on the screen is clear and concise, making the experience more inclusive for diverse individuals.

Our efforts include:
- Reducing the amount of information presented on the screen to improve readability.
- Providing descriptive error messages to aid users in understanding any issues that may arise during tracking.
- Including a link to the Help Page, where users can find detailed instructions on where to locate their tracking codes.
- Ensuring that information about each tracking status is presented in a clear and understandable manner.

## Help Page

If you need assistance finding your tracking code, visit our Help Page, where we have detailed instructions on where to locate the tracking code associated with your package.

## Tracking Status Details

The tracking status of your package can sometimes be unclear. To provide better clarity, we have included detailed explanations for each status:

- **Pedido recebido**: The package has been registered in the system, indicating that it is scheduled for delivery but has not yet been collected by the courier.
- **Em rota para coleta**: The package is in transit to the collection point, where it will be picked up by the delivery service for shipping.
- **Pacote coletado**: The package has been collected by the courier and is en route to the distribution center or delivery route.
- **Em rota de entrega**: The package is on its way to the provided delivery address and is close to completion.
- **Finalizado**: The package has been successfully delivered to the recipient or chosen pickup point.

These status details aim to provide you with a better understanding of your package's progress during the shipping and delivery process.

## Technical Considerations

In the development of this Tracking Page, we utilized the following tools and technologies:
- Next.js for building the website and improving performance with server-side rendering.
- Material UI for a consistent and visually appealing user interface.
- Figma for prototyping and designing the website's layout.
- date-fns for handling date and time formatting.
- Axios for making API requests to our backend services.
- API mock to provide realistic responses during testing and development.

We are committed to delivering a seamless and reliable tracking experience for our users. If you have any technical questions or feedback, feel free to contact our support team.

Thank you for choosing Loggi's Tracking Page, and we hope you have a smooth and satisfactory experience!

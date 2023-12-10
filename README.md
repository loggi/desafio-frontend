<img src="public/loggi.png" alt="Loggi" width="350"/>

## Hi, you’re welcome to the new Loggi's package tracker Interface

Our new package tracker Interface has been changed to offer the users a better interaction experience. More objective concepts and information about the package situation. Where it's, when it probably arrives. All in real time and easily accessible. :sunglasses:

**[Checkout the new interface preview here &rarr;](https://loggi-challenge.netlify.app/)**

**IMPORTANT**: To interact with the new interface, test any of the following trackers codes :point_down:

> `232425ABC` | `243444CDE` | `100200FGH`

## Guide of content

- [Demo screens](#screens)
- [Development environment](#development-environment)
- [Start development](#start-development)
- [Test environment](#test-environment)
- [Build environment](#build-environment)
- [Deploy environment](#deploy-environment)


## Screens
Home
![Screen](/public/screen-home.jpeg)

Tracker
![Screen](/public/screen-tracker.jpeg)

## Development environment

#### To work in new interface development, be aware of the following specs.

Was used:
- NextJS 14 &uarr;
- ReactJS 18 &uarr;
- NodeJS 18 &uarr;
- Typescript
- Sass
- Axios
- Material UI DS
- Jest
- Cypress

## Start development 
To help us with the development of the new experience, download this repo:
```bash
git clone git@github.com:loggi/loggi-challenge.git
```
Update/install all necessary packages for stability of project and environment. Run:

```bash
npm install && npm run dev
```
### About interactive layout data
All data comes from one a **[mockapi](https://mockapi.io/)**

```javascript
GET http://63f239144f17278c9a22d1cd.mockapi.io/api/v1/loggi/
```
### Quality Params

For the quality process of the application, we're using `lint` to verify the sequence pattern code. To verify the code, run:

```bash
npm run lint
```

Have a good job :seedling:

## Test environment

We're using the Framework `Jest` with `@testing/library` as a spec for component unit test.

To run all unit test: 

```bash 
npm test
```

For test End to End, we're using `Cypress` as a support spec.

For a visual process test, follow the command:

```bash
npm run cy:open
```
For a CLI e2e test, follow:

```bash
npm run cy:run
```

## Build environment

To build the project and see the compiled result, run:

```bash
npm run build && npm start
```

Here, you'll see the result of optimized structure for production but still in `localhost` 

## Deploy environment

To see an the new interface in mode production, [click here](https://loggi-challenge.netlify.app/) :zap:

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5e69338-5315-4bfc-9ec4-00b32130b6ef/deploy-status)](https://app.netlify.com/sites/loggi-challenge/deploys)

---
Enjoy the trip :fire:

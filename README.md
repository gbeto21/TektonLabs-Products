# TektonLabs-Products
Tekton labs technical test.


## Description
This backend technical test manages 3 actions (create, update and get) for objets of type Product, which include the following properties:

```json
const productTest = {
  _id: "61df4314b0c2f948817e68dc",
  name: "T-Shirt pink",
  description: "pink T-Shirt",
  unitPrice: 198.0,
};
```

## Database
This proyect usages MongoDB as Database management system and Moongose to access.


## Run
1. Once the repo has been cloned install the dependencies with the comand:
```bash
npm i
```

2. To run in development environment:
```bash
npm run dev
```

3. To build the project:
```bash
npm run build
```

4. To run the proyect one it's has been build:
```bash
npm run start
```

5. To run the test:
```bash
# To run the tests once:
npm run test
# To run the tests in watch mode:
npm run test:watch
```
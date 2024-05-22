## Ecommerce Backend
#### after cloning the github repositories . You have to install the dependencies. YOu may see below dependencies. 
___
```
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "mongoose": "^8.4.0",
  
```
### These are some dependencies and dev-dependencies you have to install. 
___

1. ```npm i cors```
2. ```npm install dotenv --save```
3. ```npm i express```
4. ```npm install mongoose --save```
5. ```npm i joi```
6. ```npm install typescript --save-dev```
7. ```npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev```
8. ```npm install --save-dev prettier```
9. ```npm install --save-dev eslint-config-prettier```
10. ```npm i ts-node-dev --save-dev```
11. ```npm i @types/cors```
12. ```npm i @types/express```

#### Go to the package.json file. You will see these scripts which to make your work easy.
___
```
  "scripts": {
    "prettier:fix": "npx prettier --write src",
    "prettier:format": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "build": "tsc",
    "lint": "eslint src --ignore-path .eslintignore --ext .ts",
    "fix": "npm run lint --fix",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node-dev --respawn --transpile-only src/server.ts"
  },
```
#### after all of these installation your can run the project easily. But if You face any problem Go through the package.json file and install whatever causing the problem. 
## Here is a important blog that may help you. 
___
[BLOG](https://blog.logrocket.com/linting-typescript-eslint-prettier/)


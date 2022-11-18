<!-- ABOUT THE PROJECT -->
## About The Project

This is a restful API microservice that delivers cocktail recipe data.

### Built With

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Node](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- csv data: https://www.kaggle.com/datasets/shuyangli94/cocktails-hotaling-co

## API Endpoints
| Method        | Endpoint      | Description   | Parameters    | Example |
| ------------- | ------------- | ------------- | ------------- | ------- |
| GET           | /drink | Retrieves random cocktail | | localhost:3000/drink |
| GET           | /drink/name | Retrieves a cocktail with similar name | name | localhost:3000/drink/name?n=mai tai
| GET          | /drink/ingredients | Retrieves cocktails with listed ingredients| ingredients | localhost:3000/drink/ingredients?i=sweet vermouth,campari,gin|
| GET          | /drink/filter | Retrieves cocktails that exclude listed ingredients| ingredients | localhost:3000/drink/filter?f=pineapple,tequila,whiskey|
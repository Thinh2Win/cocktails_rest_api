<!-- ABOUT THE PROJECT -->
## About The Project

This is a restful API microservice that delivers cocktail recipe data.

### Built With

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Node](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- csv data: https://www.kaggle.com/datasets/shuyangli94/cocktails-hotaling-co

## API Endpoints
| Method        | Endpoint      | Description   | Parameters    | JSON Body    |
| ------------- | ------------- | ------------- | ------------- |
| GET           | /reviews | Retrieves reviews | product_id, order, count |
| GET           | /reviews/meta | Retrieves meta data for a review | review_id |
| POST          | /reviews | Posts a review |  | product_id, body, name, email |
| PUT           | /reviews/:review_id/helpful | Mark review as helpful | review_id |
| PUT           | /reviews/:review_id/report | Report a review | review_id |
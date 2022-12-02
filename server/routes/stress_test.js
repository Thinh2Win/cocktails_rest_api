// docker command to run k6 test
// docker run -i loadimpact/k6 run - <script.js

import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '5s', target: 100 }, // below normal load
    { duration: '5s', target: 100 },
    { duration: '10s', target: 200 }, // normal load
    { duration: '10s', target: 200 },
    { duration: '20s', target: 300 }, // around the breaking point
    { duration: '20s', target: 300 },
    { duration: '30s', target: 400 }, // beyond the breaking point
    { duration: '30s', target: 400 },
    { duration: '10s', target: 0 }, // scale down. Recovery stage.
  ],
};

// ------- test for random drink route -------
// export default function () {
//   const res = http.get('http://172.18.0.4:3000/drink');
//   check(res, { 'status was 200': (r) => r.status == 200 });
//   sleep(0.1);
// }

// ------- test for drink by name route -------
// export default function () {
//   const drinks = ['Old%20Fashioned', 'Negroni', 'Daiquiri', 'Dry%20Martini', 'Malibu%20Sunset', 'Pina%20Colada', 'Amaretto%20Sour', 'Mudslide', 'Tequila%20Sunrise', 'AMF', 'Cosmopolitan', 'Long%20Island%20Ice%20Tea', 'Tokyo%20Ice%20Tea', 'Grasshopper', 'Clover%20Club'];
//   const res = http.get(`http://localhost:3000/drink/name?n=${drinks[Math.floor(Math.random() * drinks.length)]}`);
//   check(res, { 'status was 200': (r) => r.status == 200 });
//   sleep(0.1);
// }

// ------- test for drink by ingredients route -------
// export default function () {
//   const items = ['bitters', 'syrup', 'flower%20water', 'tonic%20water', 'ginger%20beer', 'gin', 'tequila', 'rum', 'vodka', 'blue%20curcao', 'lime', 'lemon', 'orange', 'apple', 'pineapple', 'lychee', 'mint', 'whiskey', 'gin', 'ginger', 'sugar', 'blueberry', 'strawberry', 'triple%20sec'];
//   const res = http.get(`http://localhost:3000/drink/search?i=${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]}`);
//   check(res, { 'status was 200': (r) => r.status == 200 });
//   sleep(0.1);
// }

// ------- test for drink excluding ingredients route -------
// export default function () {
//   const items = ['Bitters', 'Syrup', 'Flower%20Water', 'Tonic%20Water', 'Ginger%20Beer', 'Gin', 'Tequila', 'Rum', 'Vodka', 'Blue%20Curcao', 'Lime', 'Lemon', 'Orange', 'Apple', 'Pineapple', 'Lychee', 'Mint', 'Whiskey', 'Gin', 'Ginger', 'Sugar', 'blueberry', 'strawberry', 'Triple%20Sec'];
//   const res = http.get(`http://localhost:3000/drink/filter?i=${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]},${items[Math.floor(Math.random() * items.length)]}`);
//   check(res, { 'status was 200': (r) => r.status == 200 });
//   sleep(0.1);
// }

// note htmlreport doesn't work if using k6 in docker and should be commented out if so
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

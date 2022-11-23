import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // stress test
  // stages: [
  //   { duration: '5s', target: 100 }, // below normal load
  //   { duration: '5s', target: 100 },
  //   { duration: '10s', target: 200 }, // normal load
  //   { duration: '15s', target: 200 },
  //   { duration: '25s', target: 300 }, // around the breaking point
  //   { duration: '30s', target: 300 },
  //   { duration: '25s', target: 400 }, // beyond the breaking point
  //   { duration: '25s', target: 400 },
  //   { duration: '1m', target: 0 }, // scale down. Recovery stage.
  // ],

  // spike test
  stages: [
    { duration: '10s', target: 100 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 }, // spike to 1400 users
    { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
    { duration: '10s', target: 100 }, // scale down. Recovery stage.
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let i = ['lime', 'tequila', 'rum', 'orange', 'pineapple', 'triple sec', 'blue curacao', 'campari', 'sweet vermouth', 'dry vermouth']
  http.get(`http://localhost:8767/drink/search?i=${i[Math.floor(Math.random() * 11)]},${i[Math.floor(Math.random() * 11)]},${i[Math.floor(Math.random() * 11)]},${i[Math.floor(Math.random() * 11)]},${i[Math.floor(Math.random() * 11)]},${i[Math.floor(Math.random() * 11)]}`);
  sleep(1);
}

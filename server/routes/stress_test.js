import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    stages: [
      { duration: '5s', target: 100 }, // below normal load
      { duration: '5s', target: 100 },
      { duration: '10s', target: 200 }, // normal load
      { duration: '15s', target: 200 },
      { duration: '25s', target: 300 }, // around the breaking point
      { duration: '30s', target: 300 },
      { duration: '25s', target: 400 }, // beyond the breaking point
      { duration: '25s', target: 400 },
      { duration: '1m', target: 0 }, // scale down. Recovery stage.
    ]
  }

//test for filter and search routes
// export default function () {
//   let i = ['lime', 'tequila', 'rum', 'orange', 'pineapple', 'triple sec', 'blue curacao', 'campari', 'sweet vermouth', 'dry vermouth']
//   http.get(`http://localhost:3000/drink/search?i=${i[Math.floor(Math.random() * 10)]},${i[Math.floor(Math.random() * 10)]},${i[Math.floor(Math.random() * 10)]}`);
//   sleep(1);
// }

// test for drink by name route
  export default function () {
    let i = ['negroni', 'red', 'gold', 'royal', 'midori', 'sour']
    let res = http.get(`http://localhost:3000/drink/name?n=${i[Math.floor(Math.random() * 5)]}`);
    sleep(1);
    check (res, {
        'status code should be 200': res => res.status === 200,
    });
  }

  export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }


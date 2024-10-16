import { sleep } from "k6";
import http from "k6/http";
import { Options } from "k6/options";
import { getOptions } from "./options";

export const options: Options = getOptions({
  vus: 10,
  duration: "5s"
});

const getResponse = () => {
  const res = http.get("https://test-api.k6.io/public/crocodiles/");
  console.log(`Response time: ${res.timings.duration}`);
  sleep(2);
};

export default getResponse;

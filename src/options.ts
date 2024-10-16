import { Options } from "k6/options";

const getOptions = ({
  vus = 10,
  duration = "6s",
}: Partial<Options> = {}): Options => {
  return {
    vus,
    duration,
  };
};

export { getOptions };

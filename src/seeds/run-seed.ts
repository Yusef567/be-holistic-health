import devData from "../data/dev-data/index";
import seed from "../seeds/seed";
import db from "../connection";

const runSeed = async () => {
  await seed(devData);
  db.end();
};

runSeed();

export const parseEnv = () => {
  const objEnv = process.env;
  const arrEnvVar = Object.keys(objEnv)
    .filter(el => el.includes('RSS_'));

  arrEnvVar.forEach(el => {
    console.log(`${el}=${process.env[el]};`);
  });
};

parseEnv();
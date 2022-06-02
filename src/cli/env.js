process.env.RSS_VAR1 = 'value1';
process.env.RSS_VAR2 = 'value2';
process.env.RSS_VAR3 = 'value3';

export const parseEnv = () => {
  let result = '';
  const objEnv = process.env;  

  const arrEnvVar = Object.keys(objEnv)
    .filter(el => el.includes('RSS_'));

  arrEnvVar.forEach(el => {
    result += `${el}=${process.env[el]}; `
  });

  console.log(result);
};

parseEnv();
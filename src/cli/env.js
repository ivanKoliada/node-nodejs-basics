process.env.RSS_VAR1 = 'value1';
process.env.RSS_VAR2 = 'value2';
process.env.RSS_VAR3 = 'value3';

export const parseEnv = () => {
  const environment = process.env;
  
  const result = Object.entries(environment)
    .filter(([el]) => el.includes('RSS_'))
    .map((el) => el.join('='))
    .join('; ');

  console.log(result);
};

parseEnv();
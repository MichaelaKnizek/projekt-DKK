export const parseSearchParams = (searchParams) => {
  const values = {};
  searchParams.forEach((value, key) => {
    values[key] = value.includes(',') ? value.split(',') : value;
  });
  console.log(values);
  return values;
};

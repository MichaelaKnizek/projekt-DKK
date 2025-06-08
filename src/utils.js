export const readFilterValues = (searchParams) => {
  const values = {};
  searchParams.forEach((value, key) => {
    values[key] = value.endsWith(',') ? value.split(',').slice(0, -1) : value;
  });
  //console.log(values);
  return values;
};

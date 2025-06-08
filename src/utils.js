const defaultValues = {
  location: 'Jizerky',
  difficulty: 'lehká',
  lengthRange: '<10',
};

export const readFilterValues = (searchParams) => {
  const values = {};
  searchParams.forEach((value, key) => {
    values[key] = value.endsWith(',') ? value.split(',').slice(0, -1) : value;
  });
  Object.keys(defaultValues).forEach((key) => {
    if (!Object.keys(values).includes(key)) {
      values[key] = defaultValues[key];
    }
  });
  //console.log(values);
  return values;
};

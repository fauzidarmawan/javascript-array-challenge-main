function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let status = false;
  do {
      status = true;
      for (let i = 1; i < result.length; i++) {
          if (result[i - 1].year < result[i].year) {
              [result[i - 1], result[i]] = [result[i], result[i - 1]];
              status = false;
          }
      }
  } while (!status);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}

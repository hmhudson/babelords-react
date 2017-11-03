const formExtract = (form) => {
  return Array.from(form.target.elements)
    .map(field => {
      return field.name ? field : undefined;
    })
    .filter((x) => {
      return !!x;
    })
    .reduce((x, y) => {
      var targetValue;
      if (y.type === 'text') {
        targetValue = y.value;
      } else if (y.type === 'checkbox') {
        targetValue = y.checked;
      } else {
        targetValue = y.value;
      }
      return Object.assign(x, {
        [y.name]: targetValue
      });
    }, {});
};
export default formExtract;

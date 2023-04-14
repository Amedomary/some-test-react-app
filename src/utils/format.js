const formatData = (array) => {
  return array.map((el) => {
    return [
      new Date(el.LocalObservationDateTime).getTime(),
      el.Temperature.Metric.Value,
    ];
  });
};

export {
  formatData,
}
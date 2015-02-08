var detector = "mazur-prm8000";

function loadAndPlot(jsonData) {
  var airData = [];
  var metalData = [];
  var waterData = [];
  var woodData = [];
  var plasticData = [];
  $.each(jsonData, function (index, aRadiation) {
    timestamp = aRadiation.timeDetected;
    if ("air" === aRadiation.container) {
      airData.push([timestamp, aRadiation.cpm]);
    } else if ("metal" === aRadiation.container) {
      metalData.push([timestamp, aRadiation.cpm]);
    } else if ("water" === aRadiation.container) {
      waterData.push([timestamp, aRadiation.cpm]);
    } else if ("plastic" === aRadiation.container) {
      plasticData.push([timestamp, aRadiation.cpm]);
    } else if ("wood" === aRadiation.container) {
      woodData.push([timestamp, aRadiation.cpm]);
    }
  });
  $.plot("#dataChart", [
    {data: airData, label: "air"},
    {data: metalData, label: "metal"},
    {data: waterData, label: "water"},
    {data: woodData, label: "wood"},
    {data: plasticData, label: "plastic"}
  ], plotOptions);
}

function _dataLabel(chartItem) {
  return chartItem.series.label;
}
// Our labels along the x-axis
var reading = [1,10,20,30,40,50,60,70,80,90];
// For drawing the lines
var hr = [82,50,41,50,63,80,94,140,67,67];
var sbp = [168,170,178,190,203,266,208,247,275,234];
var dbp = [40,50,60,66,74,78,84,87,88,104];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: reading,
    datasets: [
      { 
        data: hr,
        label: "Heart rate",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: sbp,
        label: "Systolic blood pressure",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: dbp,
        label: "Diastolic blood pressure",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  }
});
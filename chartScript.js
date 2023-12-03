function CreateChart() {
    const ctx = document.getElementById('myChart');
    let elementArray = document.querySelectorAll('#container .thing');
    let unsorted = Array.from(elementArray).map(e => e.innerHTML);
    let unsortedNumbers = Array.from(elementArray).map(e => parseInt(e.innerHTML));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: unsorted,
            datasets: [{
                label: 'Data',
                data: unsortedNumbers,
                borderWidth: 1,
                borderColor: 'rgb(87,226,229)',
                backgroundColor: 'rgba(224,141,172, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function (TooltipItem) {
                            return '';
                        }
                    }
                }
            }
        }
    });
}

function UpdateChart(data) {
    let myChart = Chart.getChart('myChart');
    myChart.data.datasets[0].data = data;
    myChart.update();
}


import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const BasicColumnCharts = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  borderRadius: 5,
                  borderRadiusApplication: 'end'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const ColumnDumbbellChart = () => {
        const [state, setState] = React.useState({
          
            series: [
              {
                data: [
                  {
                    x: '2008',
                    y: [2800, 4500]
                  },
                  {
                    x: '2009',
                    y: [3200, 4100]
                  },
                  {
                    x: '2010',
                    y: [2950, 7800]
                  },
                  {
                    x: '2011',
                    y: [3000, 4600]
                  },
                  {
                    x: '2012',
                    y: [3500, 4100]
                  },
                  {
                    x: '2013',
                    y: [4500, 6500]
                  },
                  {
                    x: '2014',
                    y: [4100, 5600]
                  }
                ]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'rangeBar',
                zoom: {
                  enabled: false
                }
              },
              plotOptions: {
                bar: {
                  isDumbbell: true,
                  columnWidth: 3,
                  dumbbellColors: [['#008FFB', '#00E396']]
                }
              },
              legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'left',
                customLegendItems: ['Product A', 'Product B']
              },
              fill: {
                type: 'gradient',
                gradient: {
                  type: 'vertical',
                  gradientToColors: ['#00E396'],
                  inverseColors: true,
                  stops: [0, 100]
                }
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: false
                  }
                }
              },
              xaxis: {
                tickPlacement: 'on'
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const ColumnwithDataLabels = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Inflation',
              data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + "%";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              
              },
              title: {
                text: 'Monthly Inflation in Argentina, 2002',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                  color: '#444'
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const ColumnwithNegativeValues = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Cash Flow',
              data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
              ]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  colors: {
                    ranges: [{
                      from: -100,
                      to: -46,
                      color: '#F15B46'
                    }, {
                      from: -45,
                      to: 0,
                      color: '#FEB019'
                    }]
                  },
                  columnWidth: '80%',
                }
              },
              dataLabels: {
                enabled: false,
              },
              yaxis: {
                title: {
                  text: 'Growth',
                },
                labels: {
                  formatter: function (y) {
                    return y.toFixed(0) + "%";
                  }
                }
              },
              xaxis: {
                type: 'datetime',
                categories: [
                  '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                  '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                  '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                  '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                  '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                  '2013-07-01', '2013-08-01', '2013-09-01'
                ],
                labels: {
                  rotate: -90
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const ColumnwithRotatedLabels = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Servings',
              data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }],
            options: {
              annotations: {
                points: [{
                  x: 'Bananas',
                  seriesIndex: 0,
                  label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      background: '#775DD0',
                    },
                    text: 'Bananas are good',
                  }
                }]
              },
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  columnWidth: '50%',
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 0
              },
              grid: {
                row: {
                  colors: ['#fff', '#f2f2f2']
                }
              },
              xaxis: {
                labels: {
                  rotate: -45
                },
                categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                  'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                ],
                tickPlacement: 'on'
              },
              yaxis: {
                title: {
                  text: 'Servings',
                },
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: "horizontal",
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 0.85,
                  opacityTo: 0.85,
                  stops: [50, 0, 100]
                },
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}



import React from 'react';
import ReactApexChart from 'react-apexcharts';


export const MixedChartsLineColumnArea = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'TEAM A',
              type: 'column',
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
            }, {
              name: 'TEAM B',
              type: 'area',
              data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
            }, {
              name: 'TEAM C',
              type: 'line',
              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                stacked: false,
              },
              stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%'
                }
              },
              
              fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                  inverseColors: false,
                  shade: 'light',
                  type: "vertical",
                  opacityFrom: 0.85,
                  opacityTo: 0.55,
                  stops: [0, 100, 100, 100]
                }
              },
              labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
              ],
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                title: {
                  text: 'Points',
                }
              },
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if (typeof y !== "undefined") {
                      return y.toFixed(0) + " points";
                    }
                    return y;
              
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const MixedChartsMultipleY_Axis = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Income',
              type: 'column',
              data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
            }, {
              name: 'Cashflow',
              type: 'column',
              data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
            }, {
              name: 'Revenue',
              type: 'line',
              data: [20, 29, 37, 36, 44, 45, 50, 58]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                stacked: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [1, 1, 4]
              },
              title: {
                text: 'XYZ - Stock Analysis (2009 - 2016)',
                align: 'left',
                offsetX: 110
              },
              xaxis: {
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
              },
              yaxis: [
                {
                  seriesName: 'Income',
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#008FFB'
                  },
                  labels: {
                    style: {
                      colors: '#008FFB',
                    }
                  },
                  title: {
                    text: "Income (thousand crores)",
                    style: {
                      color: '#008FFB',
                    }
                  },
                  tooltip: {
                    enabled: true
                  }
                },
                {
                  seriesName: 'Cashflow',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#00E396'
                  },
                  labels: {
                    style: {
                      colors: '#00E396',
                    }
                  },
                  title: {
                    text: "Operating Cashflow (thousand crores)",
                    style: {
                      color: '#00E396',
                    }
                  },
                },
                {
                  seriesName: 'Revenue',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#FEB019'
                  },
                  labels: {
                    style: {
                      colors: '#FEB019',
                    },
                  },
                  title: {
                    text: "Revenue (thousand crores)",
                    style: {
                      color: '#FEB019',
                    }
                  }
                },
              ],
              tooltip: {
                fixed: {
                  enabled: true,
                  position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                  offsetY: 30,
                  offsetX: 60
                },
              },
              legend: {
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}


export const MixedLineColumnCharts = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Website Blog',
              type: 'column',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
              name: 'Social Media',
              type: 'line',
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                width: [0, 4]
              },
              title: {
                text: 'Traffic Sources'
              },
              dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
              },
              labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
              yaxis: [{
                title: {
                  text: 'Website Blog',
                },
              
              }, {
                opposite: true,
                title: {
                  text: 'Social Media'
                }
              }]
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}
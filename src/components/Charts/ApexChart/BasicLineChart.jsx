import React from 'react';
import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

export const BasicLineCharts = () => {
        const [state, setState] = React.useState({
          
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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

export const BrushChart  = () => {
    const data1 = [/* your data here */];
    const data2 = [/* your data here */];

    const [state, setState] = React.useState({
        series: [{
            name: 'Flies',
            data: data1
        }, {
            name: 'Spiders',
            data: data2
        }],
        options: {
            chart: {
                id: 'chart2',
                type: 'line',
                height: 230,
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                toolbar: {
                    autoSelected: 'pan',
                    show: false
                }
            },
            colors: ['#008FFB', '#00E396'],
            stroke: {
                width: [2, 6],
                curve: ['straight', 'monotoneCubic']
            },
            fill: {
                opacity: [1, 0.75],
            },
            markers: {
                size: 0
            },
            yaxis: [
                {
                    seriesName: 'Flies',
                    axisTicks: {
                        show: true,
                        color: '#008FFB'
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
                        text: "Flies",
                        style: {
                            color: '#008FFB'
                        }
                    },
                },
                {
                    seriesName: 'Spiders',
                    opposite: true,
                    axisTicks: {
                        show: true,
                        color: '#00E396'
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            colors: '#00E396'
                        }
                    },
                    title: {
                        text: "Spiders",
                        style: {
                            color: '#00E396'
                        }
                    },
                }
            ],
            xaxis: {
                type: 'datetime'
            }
        },
        seriesLine: [{
            name: 'Flies',
            data: data1
        }, {
            name: 'Spiders',
            data: data2
        }],
        optionsLine: {
            chart: {
                id: 'chart1',
                height: 130,
                type: 'area',
                brush: {
                    target: 'chart2',
                    enabled: true
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('24 April 2017').getTime(),
                        max: new Date('29 May 2017').getTime()
                    }
                },
            },
            colors: ['#008FFB', '#00E396'],
            stroke: {
                width: [1, 3],
                curve: ['straight', 'monotoneCubic']
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.91,
                    opacityTo: 0.1,
                }
            },
            xaxis: {
                type: 'datetime',
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                max: 100,
                tickAmount: 2
            }
        },
    });

    return (
        <div>
            <div id="wrapper">
                <div id="chart-line2">
                    <ReactApexChart options={state.options} series={state.series} type="line" height={230} />
                </div>
                <div id="chart-line">
                    <ReactApexChart options={state.optionsLine} series={state.seriesLine} type="area" height={130} />
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export const GradientChart = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'Sales',
              data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              forecastDataPoints: {
                count: 7
              },
              stroke: {
                width: 5,
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                tickAmount: 10,
                labels: {
                  formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                  }
                }
              },
              title: {
                text: 'Forecast',
                align: 'left',
                style: {
                  fontSize: "16px",
                  color: '#666'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#FDD835'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
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

export const LineChartWithAnnotations = () => {
        const [state, setState] = React.useState({
          
            series: [{
              data: series.monthDataSeries1.prices
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                id: 'areachart-2'
              },
              annotations: {
                yaxis: [{
                  y: 8200,
                  borderColor: '#00E396',
                  label: {
                    borderColor: '#00E396',
                    style: {
                      color: '#fff',
                      background: '#00E396',
                    },
                    text: 'Support',
                  }
                }, {
                  y: 8600,
                  y2: 9000,
                  borderColor: '#000',
                  fillColor: '#FEB019',
                  opacity: 0.2,
                  label: {
                    borderColor: '#333',
                    style: {
                      fontSize: '10px',
                      color: '#333',
                      background: '#FEB019',
                    },
                    text: 'Y-axis range',
                  }
                }],
                xaxis: [{
                  x: new Date('23 Nov 2017').getTime(),
                  strokeDashArray: 0,
                  borderColor: '#775DD0',
                  label: {
                    borderColor: '#775DD0',
                    style: {
                      color: '#fff',
                      background: '#775DD0',
                    },
                    text: 'Anno Test',
                  }
                }, {
                  x: new Date('26 Nov 2017').getTime(),
                  x2: new Date('28 Nov 2017').getTime(),
                  fillColor: '#B3F7CA',
                  opacity: 0.4,
                  label: {
                    borderColor: '#B3F7CA',
                    style: {
                      fontSize: '10px',
                      color: '#fff',
                      background: '#00E396',
                    },
                    offsetY: -10,
                    text: 'X-axis range',
                  }
                }],
                points: [{
                  x: new Date('01 Dec 2017').getTime(),
                  y: 8607.55,
                  marker: {
                    size: 8,
                    fillColor: '#fff',
                    strokeColor: 'red',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                  },
                  label: {
                    borderColor: '#FF4560',
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      background: '#FF4560',
                    },
              
                    text: 'Point Annotation',
                  }
                }, {
                  x: new Date('08 Dec 2017').getTime(),
                  y: 9340.85,
                  marker: {
                    size: 0
                  },
                  image: {
                    path: '../../assets/images/ico-instagram.png'
                  }
                }]
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              grid: {
                padding: {
                  right: 30,
                  left: 20
                }
              },
              title: {
                text: 'Line with Annotations',
                align: 'left'
              },
              labels: series.monthDataSeries1.dates,
              xaxis: {
                type: 'datetime',
              },
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

export const RealTimeChart = () => {
        const [state, setState] = React.useState({
          
            series: [{
              data: data.slice()
            }],
            options: {
              chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                    speed: 1000
                  }
                },
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Dynamic Updating Chart',
                align: 'left'
              },
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
              },
              yaxis: {
                max: 100
              },
              legend: {
                show: false
              },
            },
          
          
        });

        
          React.useEffect(() => {
          window.setInterval(() => {
            getNewSeries(lastDate, {
              min: 10,
              max: 90
            })
            
            ApexCharts.exec('realtime', 'updateSeries', [{
              data: data
            }])
          }, 1000)
        }, [])
        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}

export const SyncingCharts = () => {
        const [state, setState] = React.useState({
          
            series: [{
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
              })
            }],
            options: {
              chart: {
                id: 'fb',
                group: 'social',
                type: 'line',
                height: 160
              },
              colors: ['#008FFB']
            },
          
            seriesLine2: [{
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 30
              })
            }],
            optionsLine2: {
              chart: {
                id: 'tw',
                group: 'social',
                type: 'line',
                height: 160
              },
              colors: ['#546E7A']
            },
          
            seriesArea: [{
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
              })
            }],
            optionsArea: {
              chart: {
                id: 'yt',
                group: 'social',
                type: 'area',
                height: 160
              },
              colors: ['#00E396']
            },
          
            seriesSmall: [{
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
              })
            }],
            optionsSmall: {
              chart: {
                id: 'ig',
                group: 'social',
                type: 'area',
                height: 160,
                width: 300
              },
              colors: ['#008FFB']
            },
          
            seriesSmall2: [{
              data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
              })
            }],
            optionsSmall2: {
              chart: {
                id: 'li',
                group: 'social',
                type: 'area',
                height: 160,
                width: 300
              },
              colors: ['#546E7A']
            },
          
          
        });

        

        return (
          <div>
            <div id="wrapper">
                <div id="chart-line">
                <ReactApexChart options={state.options} series={state.series} type="line" height={160} />
              </div>
                <div id="chart-line2">
                <ReactApexChart options={state.optionsLine2} series={state.seriesLine2} type="line" height={160} />
              </div>
                <div id="chart-area">
                <ReactApexChart options={state.optionsArea} series={state.seriesArea} type="area" height={160} />
              </div>
                <div class="columns">
                  <div id="chart-small">
                <ReactApexChart options={state.optionsSmall} series={state.seriesSmall} type="area" height={160} width={300} />
              </div>
                  <div id="chart-small2">
                <ReactApexChart options={state.optionsSmall2} series={state.seriesSmall2} type="area" height={160} width={300} />
              </div>
                </div>
                
              </div>
            <div id="html-dist"></div>
          </div>
        );
}

export const ZoomableTimeseries = () => {
        const [state, setState] = React.useState({
          
            series: [{
              name: 'XYZ MOTORS',
              data: dates
            }],
            options: {
              chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Stock Price Movement',
                align: 'left'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              yaxis: {
                labels: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                  },
                },
                title: {
                  text: 'Price'
                },
              },
              xaxis: {
                type: 'datetime',
              },
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}
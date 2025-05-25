import React from 'react';
import ReactApexChart from 'react-apexcharts';


export const BasicTreemapCharts = () => {
        const [state, setState] = React.useState({
          
            series: [
              {
                data: [
                  {
                    x: 'New Delhi',
                    y: 218
                  },
                  {
                    x: 'Kolkata',
                    y: 149
                  },
                  {
                    x: 'Mumbai',
                    y: 184
                  },
                  {
                    x: 'Ahmedabad',
                    y: 55
                  },
                  {
                    x: 'Bangaluru',
                    y: 84
                  },
                  {
                    x: 'Pune',
                    y: 31
                  },
                  {
                    x: 'Chennai',
                    y: 70
                  },
                  {
                    x: 'Jaipur',
                    y: 30
                  },
                  {
                    x: 'Surat',
                    y: 44
                  },
                  {
                    x: 'Hyderabad',
                    y: 68
                  },
                  {
                    x: 'Lucknow',
                    y: 28
                  },
                  {
                    x: 'Indore',
                    y: 19
                  },
                  {
                    x: 'Kanpur',
                    y: 29
                  }
                ]
              }
            ],
            options: {
              legend: {
                show: false
              },
              chart: {
                height: 350,
                type: 'treemap'
              },
              title: {
                text: 'Basic Treemap'
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="treemap" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}



export  const TreemapChartsColorRange = () => {
        const [state, setState] = React.useState({
          
            series: [
              {
                data: [
                  {
                    x: 'INTC',
                    y: 1.2
                  },
                  {
                    x: 'GS',
                    y: 0.4
                  },
                  {
                    x: 'CVX',
                    y: -1.4
                  },
                  {
                    x: 'GE',
                    y: 2.7
                  },
                  {
                    x: 'CAT',
                    y: -0.3
                  },
                  {
                    x: 'RTX',
                    y: 5.1
                  },
                  {
                    x: 'CSCO',
                    y: -2.3
                  },
                  {
                    x: 'JNJ',
                    y: 2.1
                  },
                  {
                    x: 'PG',
                    y: 0.3
                  },
                  {
                    x: 'TRV',
                    y: 0.12
                  },
                  {
                    x: 'MMM',
                    y: -2.31
                  },
                  {
                    x: 'NKE',
                    y: 3.98
                  },
                  {
                    x: 'IYT',
                    y: 1.67
                  }
                ]
              }
            ],
            options: {
              legend: {
                show: false
              },
              chart: {
                height: 350,
                type: 'treemap'
              },
              title: {
                text: 'Treemap with Color scale'
              },
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: '12px',
                },
                formatter: function(text, op) {
                  return [text, op.value]
                },
                offsetY: -4
              },
              plotOptions: {
                treemap: {
                  enableShades: true,
                  shadeIntensity: 0.5,
                  reverseNegativeShade: true,
                  colorScale: {
                    ranges: [
                      {
                        from: -6,
                        to: 0,
                        color: '#CD363A'
                      },
                      {
                        from: 0.001,
                        to: 6,
                        color: '#52B12C'
                      }
                    ]
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="treemap" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
}
    
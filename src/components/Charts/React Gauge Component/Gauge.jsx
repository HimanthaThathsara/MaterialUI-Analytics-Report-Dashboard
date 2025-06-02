// https://github.com/antoniolago/react-gauge-component?tab=readme-ov-file

import GaugeComponent from 'react-gauge-component';

const SimpleGauge = () => {
    return (
        <GaugeComponent
            arc={{
                subArcs: [
                {
                    limit: 20,
                    color: '#EA4228',
                    showTick: true
                },
                {
                    limit: 40,
                    color: '#F58B19',
                    showTick: true
                },
                {
                    limit: 60,
                    color: '#F5CD19',
                    showTick: true
                },
                {
                    limit: 100,
                    color: '#5BE12C',
                    showTick: true
                },
                ]
            }}
            value={50}
            />
    );
};

const BlobGauge = () => {
    return (
        <GaugeComponent
            type="semicircle"
            arc={{
                colorArray: ['#00FF15', '#FF2121'],
                padding: 0.02,
                subArcs:
                [
                    { limit: 40 },
                    { limit: 60 },
                    { limit: 70 },
                    {},
                    {},
                    {},
                    {}
                ]
            }}
            pointer={{type: "blob", animationDelay: 0 }}
            value={50}
        />
    );
};

const ArrowGauge = () => {
    return (
        <GaugeComponent
            id="gauge-component4"
            arc={{
                gradient: true,
                width: 0.15,
                padding: 0,
                subArcs: [
                {
                    limit: 15,
                    color: '#EA4228',
                    showTick: true
                },
                {
                    limit: 37,
                    color: '#F5CD19',
                    showTick: true
                },
                {
                    limit: 58,
                    color: '#5BE12C',
                    showTick: true
                },
                {
                    limit: 75,
                    color: '#F5CD19',
                    showTick: true
                },
                { color: '#EA4228' }
                ]
            }}
            value={50}
            pointer={{type: "arrow", elastic: true}}
        />
    );
};


const TemperatureGauge = () => {
    return (
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                // gradient: true,
                subArcs: [
                  {
                    limit: 15,
                    color: '#EA4228',
                    showTick: true,
                    tooltip: {
                      text: 'Too low temperature!'
                    },
                    onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                    onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                    onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
                  },
                  {
                    limit: 17,
                    color: '#F5CD19',
                    showTick: true,
                    tooltip: {
                      text: 'Low temperature!'
                    }
                  },
                  {
                    limit: 28,
                    color: '#5BE12C',
                    showTick: true,
                    tooltip: {
                      text: 'OK temperature!'
                    }
                  },
                  {
                    limit: 30, color: '#F5CD19', showTick: true,
                    tooltip: {
                      text: 'High temperature!'
                    }
                  },
                  {
                    color: '#EA4228',
                    tooltip: {
                      text: 'Too high temperature!'
                    }
                  }
                ]
              }}
              pointer={{
                color: '#345243',
                length: 0.80,
                width: 15,
                // elastic: true,
              }}
              labels={{
                valueLabel: { formatTextValue: value => value + 'ºC' },
                tickLabels: {
                  type: 'outer',
                  defaultTickValueConfig: { 
                    formatTextValue: (value) => value + 'ºC' ,
                    style: {fontSize: 10}
                },
                  ticks: [
                    { value: 13 },
                    { value: 22.5 },
                    { value: 32 }
                  ],
                }
              }}
              value={22.5}
              minValue={10}
              maxValue={35}
            />
    );
};




const kbitsToMbits = (value) => {
  if (value >= 1000) {
    value = value / 1000;
    if (Number.isInteger(value)) {
      return value.toFixed(0) + ' mbit/s';
    } else {
      return value.toFixed(1) + ' mbit/s';
    }
  } else {
    return value.toFixed(0) + ' kbit/s';
  }
}

const SpeedGauge = () => {
    return (
        <GaugeComponent className='gauge-component-class'
          arc={{
            nbSubArcs: 150,
            colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
            width: 0.2,
            padding: 0.003
          }}
          labels={{
            valueLabel: {
              style: {fontSize: 40},
              formatTextValue: kbitsToMbits
            },
            tickLabels: {
              type: "outer",
              ticks: [
                { value: 200 },
                { value: 400 },
                { value: 600 },
                { value: 800 },
                { value: 1000 },
                { value: 1500 },
                { value: 2000 },
                { value: 2500 },
                { value: 3000 },
                { value: 3500 },
                { value: 4000 },
                { value: 4500 },
                { value: 5000 }
              ],
              defaultTickValueConfig: {
                formatTextValue: kbitsToMbits
              }
            }
          }}
          value={2300}
          minValue={0}
          maxValue={5000}
        />
    );
};

export { SimpleGauge, BlobGauge, ArrowGauge, TemperatureGauge, SpeedGauge };
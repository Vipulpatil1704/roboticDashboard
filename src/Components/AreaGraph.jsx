import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export function AreaGraph({selectedHour}) {
    const labels = ['Mission1', 'Mission2', 'Mission3', 'Mission4', 'Mission5']
    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Flight Time',
            data: labels.map(() => faker.datatype.number({ min: 0, max:selectedHour*100 })),
            borderColor: 'rgb(3, 1, 25)',
            backgroundColor: 'rgba(3, 1, 25, 0.5)',
          },
          {
              fill: true,
              label: 'Area Covered',
              data: labels.map(() => faker.datatype.number({ min: 0, max:selectedHour*100 })),
              borderColor: 'rgb(37, 278, 25)',
              backgroundColor: 'rgba(37, 278, 25, 0.5)',
            },
            {
              fill: true,
              label: 'Payload Dispensed',
              data: labels.map(() => faker.datatype.number({ min: 0, max:selectedHour*100 })),
              borderColor: 'rgb(95, 189, 235)',
              backgroundColor: 'rgba(95, 189, 235, 0.5)',
            }
        ],
      }
  return <div style={{position:'relative',height:'auto',minHeight:'300px',width:'100%'}}>
     <Line options={options} data={data} />
  </div>
}

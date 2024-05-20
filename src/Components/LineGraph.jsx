import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
export function LineGraph({selectedHour}) {
  
const labels = ['Mission1', 'Mission2', 'Mission3', 'Mission4', 'Mission5'];

const data = {
  labels,
  datasets: [
    {
      label: 'Flight Time',
      data: labels.map(() => faker.datatype.number({ min: -1000, max:selectedHour*100 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Area Covered',
      data: labels.map(() => faker.datatype.number({ min: -1000, max:selectedHour*100  })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Payload Dispensed',
      data: labels.map(() => faker.datatype.number({ min: -1000, max:selectedHour*100  })),
      borderColor: 'rgb(36, 83, 23)',
      backgroundColor: 'rgba(24, 89, 2, 0.5)',
    }
  ],
};

  return <div style={{position:'relative',height:'500px',width:'100%'}}>
     <Line options={options} data={data} />;
  </div>
 
}

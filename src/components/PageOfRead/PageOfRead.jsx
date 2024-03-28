import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const data = [
  {
    name: 'F. Scoot Fitzgerald',
    uv: 1925,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Harper Lee',
    uv: 1960,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Yuval Noah Harari',
    uv: 2011,
    pv: 3908,
    amt: 2000,
  },
  {
    name: ' Douglas Adams',
    uv: 1969,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'J.D. Salinger',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '1984',
    uv: 1951,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageOfRead() {
 

 const chartData = useLoaderData();
 console.log(chartData);
 
  return (
    <div className='flex items-center justify-center'>
      <BarChart
        width={900}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

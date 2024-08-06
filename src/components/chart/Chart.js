import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './Chart.css';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 5490 },
  { name: '23', uv: 3890 },
  { name: '25', uv: 2590 },
  { name: '27', uv: 1290 },
];

const Chart = () => {
  return (
    <div className={`card text-white bg-dark mb-3`} style={{  borderRadius: '10px', position: 'relative'  }} >
      <div className='chart-head'>
        <h3 style={{ margin: 0 }}>Activity</h3>
        <button className='chart-btn'>Weekly <i className='pi pi-sort-down-fill btn-icon'/></button>  
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data}
          barSize={27} 
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ddd" />
          <YAxis stroke="#ddd" />
          <Tooltip />
          <Bar dataKey="uv" fill="#7289da" radius={[20, 20, 20, 20]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

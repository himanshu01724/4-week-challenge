import React, { PureComponent } from 'react';
import { PieChart, Pie,Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {useEffect} from 'react'
import Mapping from './Components/Mapping';
 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

 
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];



const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

function App() {

  useEffect(() => {
    // Change the body background color
    document.body.style.backgroundColor = 'lightblue';

    // Return a cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);



  return (
    <div className="App">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Legend layout="horizontal" verticalAlign="top" align="center" />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            label = {renderCustomizedLabel}
            
            labelLine = {false}
          >
          {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Tooltip />
        </PieChart>
        
      </ResponsiveContainer>
      <Mapping/>
          </div>
  );
}

export default App;

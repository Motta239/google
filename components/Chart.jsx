
import {
  AreaChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from 'recharts'
import moment from "moment";
function Chart({data}) {
    const dateFormatter = (item) => moment(item).format("DD MMM YY");
    console.log(data)
  return (
    <ResponsiveContainer width="99%" height="90%">
      <AreaChart
      
        data={data}
        stroke="#efefef"
        margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: -20
          }}
      >
        <defs>
        <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
     <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
     <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
            
     <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
   </linearGradient>
        </defs>
        <Area
          stroke="#dc3737" fill="#dc3737"
          fillOpacity={0.1}
          dataKey="open"
          
         
          dot={false}
          activeDot={false}
        />
         <CartesianGrid stroke="#a2a2a275" vertical={false} strokeDasharray="3 3"  />
        <XAxis
          dataKey="date"
          tickCount={1}
          tick={{ fontSize: '9px' }}
          tickLine={false}
          tickFormatter={dateFormatter} 
        />


        <YAxis   
                type='number'
                tick={{ fontSize: '4px' }}
                tickCount={20}
                domain={[,]} 
                tickFormatter={tick => `${Math.floor(tick)}`}
                tickMargin={1}
                tickLine={false}
                axisLine={false}
               />
                      
         <Tooltip      
            contentStyle={{ backgroundColor: "white", borderRadius: '15px', boxShadow: '1px 2px 9px #F4AAB9'}}   labelFormatter={dateFormatter}      active={true}
     
         />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart

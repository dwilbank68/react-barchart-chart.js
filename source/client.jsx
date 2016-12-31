import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.jsx';
import rawData from '../data/data.csv';
import {arr2chart} from './utils/arr2chart.js';

const data = {
    type:'bar',
    data: arr2chart(rawData),
    options:{
        hover: { mode:'label'}, // single
        responsive:true,
        title: {
            display:true,
            text:"whatever"
        },
        tooltips: { mode:'label' } // single
    }
};

ReactDOM.render(
    <Chart {...data} width="800" height="300" />,
    document.getElementById('react')
);

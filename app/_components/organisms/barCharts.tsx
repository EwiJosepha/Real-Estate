import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';

const BarCharts = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Total View',
            data: [12, 19, 13, 25, 9, 3, 24],
        },
    ]);

    return (
        <div>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default BarCharts;
import ReactApexChart from 'react-apexcharts';

const BarCharts = () => {
    const chartOptions = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
    };

    const chartSeries = [
        {
            name: 'Total View',
            data: [12, 19, 13, 25, 9, 3, 24],
        },

    ];

    return (
        <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
        />
    );
};

export default BarCharts;
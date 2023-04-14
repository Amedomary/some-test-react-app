import { useEffect, useState } from 'react';
import { axiosApi, api } from '../api';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';
import { formatData } from '../utils/format';

const ChartPage = () => {
  const [chartData, setChartData] = useState(false);
  const [formattedChartData, setFormattedChartData] = useState([]);

  const options = {
    title: {
      text: chartData ? 'Москва, 24 часа' : 'Загрузка',
    },
    yAxis: [
      {
        title: {
          text: 'Температура, °C',
        },
      },
    ],
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: 'Даты',
      },
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e %b %H:%M} - {point.y:.2f} °C',
    },
    series: [
      {
        name: 'Москва',
        data: formattedChartData,
      },
    ],
  };

  useEffect(() => {
    axiosApi
      .get(api.getWeather())
      .then(function (response) {
        setChartData(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    chartData && setFormattedChartData(formatData(chartData.data));
  }, [chartData]);

  return (
    <div className='container'>
      <header className='header'>
        <Link to='/'>Вернуться на главную</Link>
      </header>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartPage;

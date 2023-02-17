import React, { useEffect } from 'react';

import './App.scss';
import DateSlider from './component/DateSlider';




const App: React.FC = () => {

  const scienceCategory = {
    name: 'Наука',
    dates: [
      {
        title: '2015',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
      },
      {
        title: '2016',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
      },
      {
        title: '2017',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2018',
        description: 'Открыто существование ранее неизвестного народа, жившего на территории Северной Америки. Учёные дали им название древних берингийцев'
      },
      {
        title: '2019',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2020',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
    ]
  }
  const gamesCategory = {
    name: 'Игры',
    dates: [
      {
        title: '2015',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
      },
      {
        title: '2016',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
      },
      {
        title: '2017',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2018',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2019',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2020',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
    ]
  }
  const sportsCategory = {
    name: 'Спорт',
    dates: [
      {
        title: '2015',
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
      },
      {
        title: '2016',
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
      },
      {
        title: '2017',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2018',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2019',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
      {
        title: '2020',
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
      },
    ]
  }
  const movieCategory = {
    name: 'Кино',
    dates: [
      {
        title: '1992',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: '1994',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat.'
      },
      {
        title: '1995',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
      {
        title: '1996',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
    ]
  }
  const journalismCategory = {
    name: 'Журналистика',
    dates: [
      {
        title: '1972',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: '1974',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat.'
      },
      {
        title: '1975',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
      {
        title: '1976',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
    ]
  }
  const randomCategory = {
    name: 'Lorem',
    dates: [
      {
        title: '1982',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: '1983',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat. Congue quisque egestas diam in arcu cursus euismod quis viverra.'
      },
      {
        title: '1985',
        description: 'Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ac feugiat sed lectus vestibulum mattis. '
      },
    ]
  }
  const literatureCategory = {
    name: 'Литература',
    dates: [
      {
        title: '1980',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant.'
      },
      {
        title: '1981',
        description: 'Purus gravida quis blandit turpis cursus in hac habitasse. Nec tincidunt praesent semper feugiat. Congue quisque egestas diam in arcu cursus euismod quis viverra.'
      },
    ]
  }
  //Указываем какие категории добавить в слайдер
  const categories1 = [movieCategory, scienceCategory, journalismCategory, randomCategory, sportsCategory, literatureCategory]
  const categories = [literatureCategory, gamesCategory]

  return (
    <div className="App">
      <DateSlider categories={categories1} />
      <DateSlider categories={categories} />
    </div>
  );
}

export default App;

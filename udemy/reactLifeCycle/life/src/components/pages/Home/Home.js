import React, { Component } from 'react';
import HomeView from './HomeView';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-console
    console.log('constructor - используеться самый первый при создании компонента для инициализации state');
    this.state = {
      hero: { name: 'test' },
      hasError: false,
      currentValue: 0
    };
  }


  static getDerivedStateFromProps() {
    // eslint-disable-next-line no-console
    console.log('getDerivedStateFromProps - является статической функцией и не имеет доступа к this -'
      + 'вместо этого ожидается, что вы вернете объект, который будет объединен с будущим состоянием компонента '
      + '(точно так же, как работа с setState!)\n'
      + 'Функция используется, когда компонент обновляется, но также и когда он монтируется, '
      + 'сразу после constructorвызова, поэтому вам больше не нужно использовать форму состояния свойства '
      + 'конструктора или класса, если вы хотите установить начальное состояние из реквизита.');
    return null;
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('componentDidMount - будет вызвана сразу после монтирования компоненты, в основном используется для '
      + 'получения данных асинхронно (например от стороннего API)');
    this.getResource('people', 3)
      .then((hero) => {
        this.setState({
          hero
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-next-line no-console
    console.log('shouldComponentUpdate - ');
    const { hero, currentValue } = this.state;
    if (hero !== nextState.hero) {
      return true;
    }
    if (currentValue !== nextState.currentValue) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-console
    console.log('getSnapshotBeforeUpdate - если пользователь прокручивает страницу вниз и добавляется новое сообщение, '
      + 'экран может перемещаться и сделать пользовательский интерфейс сложнее в использовании.'
      + ' Добавив, getSnapshotBeforeUpdateвы можете рассчитать текущую позицию прокрутки'
      + ' и поддерживать ее через обновление DOM.\n'
      + 'Даже если функция не является статичной, рекомендуется возвращать значение,'
      + ' а не обновлять компонент.'
      + ' Возвращенное значение будет передано в componentDidUpdateкачестве 3-го параметра.');
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-console
    console.log('componentDidUpdate - сраьатывает для обновления состояния');
    const { currentValue } = this.state;
    if (prevState.currentValue !== currentValue) {
      return true;
    }
    return false;
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('componentWillUnmount - срабатывает перед размонтированием компонента');
  }

  // для теста componentDidMount and  shouldComponentUpdate
  getResource = async (url = 'people', id = 5) => {
    const res = await fetch(`https://swapi.co/api/${url}/${id}/`);
    return res.json();
  };

  // для теста getDerivedStateFromProps
  handleClickButton = () => {
    const { currentValue } = this.state;
    this.setState({
      currentValue: currentValue + 1
    });
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render');
    const { hasError, hero, currentValue } = this.state;
    if (hasError) {
      return (
        <p>error</p>
      );
    }

    return (
      <HomeView
        hero={hero}

        onHandleClickButton={this.handleClickButton}
        currentValue={currentValue}
      />
    );
  }
}

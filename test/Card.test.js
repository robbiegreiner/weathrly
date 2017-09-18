import Card from '../lib/Card.js';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Card functionality', () => {

  const shallowCard = shallow(<Card time='9:40'
                                    condition='sunny'
                                    img='sunny.png'
                                    temp='84 F'/>);

  it('should show the time', () => {
    const time = shallowCard.find('.time');

    expect(time.text()).toEqual('9:40');
  });

  it('should show current condition', () => {
    const cardCondition = shallowCard.find('.card-condition');

    expect(cardCondition.text()).toEqual('sunny');
  });

  it('should show an icon for the weather condition', () => {
    const cardIcon = shallowCard.find('img');

    expect(cardIcon.prop('src')).toEqual('sunny.png');
  });

  it('the icon should have an alt tag describing the condition', () => {
    const cardIcon = shallowCard.find('img');

    expect(cardIcon.prop('alt')).toEqual('sunny');
  });

  it('should show current temp', () => {
    const cardTemp = shallowCard.find('.temp');

    expect(cardTemp.text()).toEqual('84 F');
  });

});

import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {

    test('Debe de mostrar el componente de forma correcta', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['Super man', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    });

});

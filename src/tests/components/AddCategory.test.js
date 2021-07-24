import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Texto de prueba';

        input.simulate( 'change', { target: { value } } );
        
    });

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Texto de prueba';

        input.simulate( 'change', { target: { value } } );
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.props().value ).toBe( '' );

    });

});

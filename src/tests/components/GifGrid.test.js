import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGrid} from '../../../src/components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Finge cualquier llamada que haga el archivo useFetchGifs y controla
// la informacion que el metodo devuelve
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Categoria de prueba';

    test('Debe de mostrar el componente de forma correcta', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar items cuando se cargan imagenes en useFetchGifs', () => {

        const gifs = [{
            id: 1,
            url: "http://url.com/test.jpg",
            title: "Titulo de la imagen",
          }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });
    
});

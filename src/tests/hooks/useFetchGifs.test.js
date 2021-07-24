import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el custom Hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Super man'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Debe de retornal un arreglo de imagenes y el loading de ser false', async () => {

        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Super man'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
        
    });
    
});

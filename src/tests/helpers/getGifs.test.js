import { getGifs } from '../../../src/helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
   
    test('Debe de traer 10 elementos', async () => {

        const response = await getGifs( 'Super man' );
        expect( response.length ).toBe( 10 );

    });

    test('Debe de recibir una lista vacia cuando no se envia una categoria como argumento', async () => {

        const response = await getGifs('');
        expect( response.length ).toBe( 0 );
        
    });
        

});

import { GifGridItem } from "../../components/GifGridItem";
import {shallow} from "enzyme";

describe('Pruebas sobre <GifsGridItem />', () => {

    const title = "titulo";
    const url = "https://www.localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

   test('Debe de mostrar correctamente el componente', () => {

       expect(wrapper).toMatchSnapshot();

   });

   test('Debe de tener un parrafo que muestre el titulo', () => {

        expect(wrapper.find('p').text().trim()).toBe(title);
       
   });

   test('Debe de tener la imagen igual a la url y un alt igual al de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
       
   });

   test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
       
   });
   
   
   
    
});

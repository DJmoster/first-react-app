import './style.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Slider() {
    return (
        <Splide>
            <SplideSlide>
                <div className='slider' style={{backgroundColor: '#4893b0'}}></div>
            </SplideSlide>
            <SplideSlide>
                <div className='slider' style={{backgroundColor: '#f68225'}}></div>     
            </SplideSlide> 
            <SplideSlide>
                <div className='slider' style={{backgroundColor: '#bd525c'}}></div>     
            </SplideSlide>
        </Splide>
    );
}
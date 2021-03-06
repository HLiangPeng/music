import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  .before{
    position: absolute;
    top: 0px;
    height: 80px;
    width: 100%;
    background: ${style["theme-color"]};
  }
  .swiper-container{
    position: relative;
    width: 90%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active{
      background: ${style["theme-color"]};
    }
    img{
      width: 100%;
    }
  }
`

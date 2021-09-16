import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListContainer = styled.div`
  padding: 10px 2vw;
  .title {
    margin: 10px 0;
  }
  .list-box {
    display: flex;
    flex-wrap: wrap;
  }
`

export const ListItem = styled.div`
  width: 30vw;
  margin: 10px 0;
  margin-right: 3vw;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .img-box {
    position: relative;
    width: 30vw;
    height: 30vw;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .linstener {
      position: absolute;
      top: 6px;
      right: 6px;
      color: #fff;
      font-size: 10px;
      background: rgba(0, 0, 0, 0.2);
      padding: 5px 5px 4px 5px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 10px;
        margin-right: 2px;
        transform: translateY(-1px)
      }
    }
  }
  .desc {
    font-size: 12px;
    ${style.noWrap(2)};
    margin-top: 4px;
  }
`
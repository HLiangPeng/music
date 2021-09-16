import React from 'react'
import { ListContainer, ListItem } from './style'
import { getCount } from '../../utils'

const List = function(props) {

  const { listData } = props

  return (
    <ListContainer>
      <div className="title">
        私人定制
      </div>
      <div className="list-box">
        {
          listData.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="img-box">
                  <img src={item.img} alt="歌单" />
                  <div className="linstener">
                    <span className="iconfont">&#xe61e;</span>
                    { getCount(item.listener) }
                  </div>
                </div>
                <div className="desc">
                  { item.name }
                </div>
              </ListItem>
            )
          })
        }
      </div>
    </ListContainer>
  )
}

export default React.memo(List)

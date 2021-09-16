import React from "react"
import Slider from '../../components/slider'
import List from '../../components/list'

function Recommend() {

  const bannerList = [
    'https://img0.baidu.com/it/u=296445519,2509936059&fm=26&fmt=auto&gp=0.jpg',
    'https://img2.baidu.com/it/u=4246794212,2658652294&fm=26&fmt=auto&gp=0.jpg',
    'https://img2.baidu.com/it/u=4066710020,3330643563&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=435',
    'https://img0.baidu.com/it/u=1307064224,2679893275&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=418'
  ]

  const listData = [
    {
      name: '不营业的日常',
      img: 'https://img0.baidu.com/it/u=296445519,2509936059&fm=26&fmt=auto&gp=0.jpg',
      listener: 200000
    },
    {
      name: '没有感情的孤独者, 矫情的肆无忌惮',
      img: 'https://img2.baidu.com/it/u=4066710020,3330643563&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=435',
      listener: 300000000
    },
    {
      name: '不营业的日常',
      img: 'https://img0.baidu.com/it/u=296445519,2509936059&fm=26&fmt=auto&gp=0.jpg',
      listener: 200
    },
    {
      name: '没有感情的孤独者',
      img: 'https://img2.baidu.com/it/u=4066710020,3330643563&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=435',
      listener: 300
    },
    {
      name: '不营业的日常',
      img: 'https://img0.baidu.com/it/u=296445519,2509936059&fm=26&fmt=auto&gp=0.jpg',
      listener: 200
    },
    {
      name: '没有感情的孤独者',
      img: 'https://img2.baidu.com/it/u=4066710020,3330643563&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=435',
      listener: 300
    },
    {
      name: '不营业的日常',
      img: 'https://img0.baidu.com/it/u=296445519,2509936059&fm=26&fmt=auto&gp=0.jpg',
      listener: 200
    },
    {
      name: '没有感情的孤独者',
      img: 'https://img2.baidu.com/it/u=4066710020,3330643563&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=435',
      listener: 300
    }
  ]

  return (
    <>
      <Slider bannerList={bannerList} />
      <List listData={listData} />
    </>
  )
}

export default React.memo(Recommend)
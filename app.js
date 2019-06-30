import locales from './utils/locales'
import T from './utils/i18n'

T.registerLocale(locales);	// (1)
T.setLocaleByIndex(wx.getStorageSync('langIndex') || 0);	// (2)
wx.T = T;	// (3)

App({
  onLaunch: function () {
    // wx.getStorage({
    //   key: 'cart',
    //   success(res){
    //     console.log(res.data)
    //   },
    //   fail(){
    //     wx.setStorage({
    //       key: 'cart',
    //       data: [],
    //     })
    //   }
    // })
    wx.setStorage({
      key: 'cart',
      data: [],
    })
  },
  serverUrl: '',
  imageUrl: '',
  globalData: {
    userInfo: "null",
    storeList: [
      {
        storeId:1,
        img: 'https://img.alicdn.com/imgextra/i3/1674468869/O1CN01SXt7lU2FO3C0u6zCZ_!!1674468869.jpg_430x430q90.jpg',
        shopName: "优昵母婴",
        platform: "ebay",
        monthSale: "11",
        stock: "38",
        kind: "4"
      },
      {
        storeId: 1,
        img: 'https://img.alicdn.com/imgextra/i3/1674468869/O1CN019veJ0A2FO3BVpX4g4_!!0-item_pic.jpg_430x430q90.jpg',
        shopName: "优昵母婴",
        platform: "淘宝",
        monthSale: "11",
        stock: "38",
        kind: "4"
      }
    ],
    //100-199 彩妆套装专营店 200-299 眼影店
    totalItems: [
      {
        supplierName: "彩妆套装专营店",
        selectAllStatus: false,
        Items: [
          {
            id: 100,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生1",
            price: ["99", "120"],
            freight: 1,
            weight: 8.2,
            num: 1,
            selected: true,
            sale: ["4230", "件"]
          },

          {
            id: 101,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生2",
            price: ["99", "120"],
            freight: 1,
            weight: 8.2,
            num: 1,
            selected: true,
            sale: ["4230", "件"]
          },

          {
            id: 102,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生3",
            price: ["99", "120"],
            freight: 1,
            weight: 8.2,
            num: 1,
            selected: true,
            sale: ["4230", "件"]
          },

          {
            id: 103,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生4",
            price: ["99", "120"],
            freight: 1,
            weight: 8.2,
            num: 1,
            selected: true,
            sale: ["4230", "件"]
          },
          
        ],
      },
      {
        supplierName: "眼影旗舰店",
        selectAllStatus: false,
        Items: [
          {
            id: 100,
            img: "https://cbu01.alicdn.com/img/ibank/2018/861/943/8932349168_1689279524.400x400.jpg",
            name: "批发瓶装玫瑰花茶水果茶 代加工花草茶组合茉莉金银花定制礼盒装",
            price: [15.10, 1.00],
            freight: 0.4,
            weight: 8.2,
            num: 20,
            selected: true,
            sale: ["36", "罐"]
          },
          {
            id: 50284,
            img: "https://cbu01.alicdn.com/img/ibank/2018/650/634/9861436056_1689279524.400x400.jpg",
            name: "批发蜂蜜冻干柠檬片泡茶 四川安岳柠檬干水果茶干片OEM代加工散装",
            price: [40.00, 13.00],
            freight: 0.4,
            weight: 8.2,
            num: 15,
            selected: true,
            sale: ["3", "盒"]
          },
          {
            id: 50184,
            img: "https://cbu01.alicdn.com/img/ibank/2018/265/643/10210346562_1689279524.400x400.jpg",
            name: "批发贴牌 桂圆红枣枸杞茶 袋泡茶oem代加工花果茶养生茶 厂家直销",
            price: [20.00, 12.00],
            freight: 0.4,
            amount: 6.36,
            num: 30,
            selected: false,
            sale: ["3", "盒"]
          },

        ],
      },
      {
        supplierName: "深圳市宝安区西乡自然派服装厂",
        selectAllStatus: false,
        Items: [
          {
            id: 50284,
            img: "https://cbu01.alicdn.com/img/ibank/2017/865/725/4537527568_1127935364.400x400.jpg",
            name: "2019春季新款女装文艺小清新宽松大码长袖白色蕾丝荷叶边连衣裙女",
            price: [55.00, 53.00],
            freight: 4,
            weight: 8.2,
            num: 8,
            selected: true,
            sale: ["30", "件"]
          },
          {
            id: 50184,
            img: "https://cbu01.alicdn.com/img/ibank/2015/352/028/2499820253_1127935364.400x400.jpg",
            name: "2019春季新款女装文艺宽松大码长袖棉麻格子连衣裙女厂家批发",
            price: [43.9, 46.3],
            freight: 4,
            amount: 6.36,
            num: 10,
            selected: false,
            sale: ["12", "件"]
          },
        ],
      },
    ],
    cartItems: [
      {
        supplierName: "彩妆套装专营店",
        selectAllStatus: false,
        Items: [
          {
            id: 101,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生测试商品101",
            price: ["99", "120"],
            freight: 1,
            weight: 8.2,
            num: 1,
            selected: true,
            sale: ["4230", "件"]
          },
          {
            id: 102,
            img: "../../resources/images/hp_tuijian_1.jpg",
            name: "灰姑娘网红新手化妆品套装彩妆全套盒初学者组合底美妆正品女学生102",
            price: [60, 78],
            freight: 1,
            weight: 8.2,
            num: 100,
            selected: true,
            sale: ["4230", "件"]
          }
        ],
      },
      
      
    ],
  }
}
)
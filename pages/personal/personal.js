Page({
    data: {
        '__modal__': {
            show: false
        },
        name: 'user',     // 用户昵称
        avatar: '../../resources/images/user_image.png',   // 用户头像
        right: '../../resources/images/right.png',
        coinCount: 0,   
        waitPayOrderCount: 0,        // 待付款
        waitDeliverOrderCount: 0,    // 待发货
        waitReceiveOrderCount: 0,    // 待收货
        waitCommentOrderCount: 0    // 待评价
    },
    onLoad() {
    },
    onReady(){
    }
});
var posts=["2024/10/09/博客重新搭好啦/","2024/11/25/泠鸢三专《自下而向上升》开箱/","2024/11/21/独立按键控制LED/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/10/09/博客重新搭好啦/","2025/03/12/English-Class-Presentation-小米：MIUI到HyperOS的智能演进/","2024/11/25/泠鸢三专《自下而向上升》开箱/","2025/02/12/用NapCat-Yunzai搭建一个QQ机器人并接入Gemini/","2024/11/21/独立按键控制LED/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
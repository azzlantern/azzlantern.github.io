var posts=["2025/04/20/Archlinux-Windows-双系统安装笔记/","2024/10/09/博客重新搭好啦/","2024/11/25/泠鸢三专《自下而向上升》开箱/","2025/03/12/English-Class-Presentation-小米：MIUI到HyperOS的智能演进/","2025/04/24/English-Class-Presentation-川菜：来自天府之国的味蕾交响曲/","2025/02/12/用NapCat-Yunzai搭建一个QQ机器人并接入Gemini/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
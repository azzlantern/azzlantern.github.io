var posts=["2025/04/20/Archlinux-Windows-双系统安装笔记/","2024/11/25/泠鸢三专《自下而向上升》开箱/","2024/10/09/博客重新搭好啦/","2025/02/12/用NapCat-Yunzai搭建一个QQ机器人并接入Gemini/","2025/10/29/配置与管理Samba服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/10/11/Chinese-Culture/","2024/10/09/博客重新搭好啦/","2024/10/11/game/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
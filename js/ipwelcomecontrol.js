    // needRefresh
    // nav中间的标题变化
    document.getElementById("page-name").innerText = document.title.split(` | ${GLOBAL_CONFIG_SITE.configTitle}`)[0];
    anzhiyu.initIndexEssay();
    anzhiyu.changeTimeInEssay();
    anzhiyu.removeBodyPaceClass();
    anzhiyu.qrcodeCreate();
    anzhiyu.changeTimeInAlbumDetail();
    anzhiyu.reflashEssayWaterFall();
    anzhiyu.sayhi();
    anzhiyu.stopImgRightDrag();
    anzhiyu.addNavBackgroundInit();
    anzhiyu.setValueToBodyType();
    anzhiyu.catalogActive();
    anzhiyu.tagsPageActive();
    anzhiyu.categoriesBarActive();
    anzhiyu.topCategoriesBarScroll();
    anzhiyu.switchRightClickMenuHotReview();
    anzhiyu.getCustomPlayList();
    anzhiyu.addEventListenerConsoleMusicList(false);
    anzhiyu.initPaginationObserver();
+   // 以上是原有的
+   // 欢迎信息
+   NaoKuo.setWelcome_info();
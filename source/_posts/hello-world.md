---
title: Hello World
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

嗨嗨嗨，居然有人看这嘛

播放器实现方法：

音乐

```    
{% media audio %}
- name: ""
  url: 
  artist: ""  
 {% endmedia %}
```

视频

```    
{% media video %}
- name: ""
  url: 
  artist: ""  
 {% endmedia %}
```

举个🌰（音乐）

```
{% media audio %}
- name: "Hanser 花園セレナ - PONPONPON（gigaP arrange ver）"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FVmlLQjJLN1ctbENrWkJIYTBJYm55QUJlTW1PTXRqTTVnX2NUeEFKemNLdGVnP2U9c0RoRmxX.mp3"
  artist: "Hanser 花園セレナ"
- name: "不需等天晴"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FWk4xS19wdm5DNUNsT3ZObmdQZU5mTUJmMEpZZzVZRjRNMi1jSjJscUNWUkJ3P2U9a0pRTjA.mp3"
  artist: "Hanser"
- name: "夏海安全指南"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FWjJDTFRvRWlVRkN2eDZLeTZqUkd5c0JsdFM1ZURjcmhzZmtnZFhLc1A1Zl9BP2U9RFV0QkNv.mp3"
  artist: "Hanser"
- name: "不需陪伴的闲暇"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FY0FRWHhob2MyNU5oY3dONUdyUUxUUUI0d0FiWnl5RzE5V0tqUWV2a3RTX0d3P2U9amFkVFBx.mp3"
  artist: "Hanser"
- name: "一抹憨色"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FU1VkRzBTVGRSTklxTVM5ZzlzVnlyRUJ6bUVCSkRaSHQzbWIzZ1VYR2c0b3VBP2U9N0ZvWVlx.mp3"
  artist: "一抹憨色"
- name: "感谢陪伴"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FZlpmZVlXY1JZUk5pbkdaNGp4TGZKNEI5WEp4cWxHVHEzTDEyZlI4XzZOWkNnP2U9Q2pWd3l5.mp3"
  artist: "一抹憨色"
{% endmedia %}

```

{% media audio %}
- name: "Hanser 花園セレナ - PONPONPON（gigaP arrange ver）"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FVmlLQjJLN1ctbENrWkJIYTBJYm55QUJlTW1PTXRqTTVnX2NUeEFKemNLdGVnP2U9c0RoRmxX.mp3"
  artist: "Hanser 花園セレナ"
- name: "不需等天晴"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FWk4xS19wdm5DNUNsT3ZObmdQZU5mTUJmMEpZZzVZRjRNMi1jSjJscUNWUkJ3P2U9a0pRTjA.mp3"
  artist: "Hanser"
- name: "夏海安全指南"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FWjJDTFRvRWlVRkN2eDZLeTZqUkd5c0JsdFM1ZURjcmhzZmtnZFhLc1A1Zl9BP2U9RFV0QkNv.mp3"
  artist: "Hanser"
- name: "不需陪伴的闲暇"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FY0FRWHhob2MyNU5oY3dONUdyUUxUUUI0d0FiWnl5RzE5V0tqUWV2a3RTX0d3P2U9amFkVFBx.mp3"
  artist: "Hanser"
- name: "一抹憨色"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FU1VkRzBTVGRSTklxTVM5ZzlzVnlyRUJ6bUVCSkRaSHQzbWIzZ1VYR2c0b3VBP2U9N0ZvWVlx.mp3"
  artist: "一抹憨色"
- name: "感谢陪伴"
  url: "https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8yMmo0YmotbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvYXp6bGlnaHQyMzNfMjJqNGJqX29ubWljcm9zb2Z0X2NvbS9FZlpmZVlXY1JZUk5pbkdaNGp4TGZKNEI5WEp4cWxHVHEzTDEyZlI4XzZOWkNnP2U9Q2pWd3l5.mp3"
  artist: "一抹憨色"
{% endmedia %}



# 本文作者： Ruri Shimotsuki @優萌初華
# 本文链接： https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/special/
# 版权声明： 本站所有文章除特别声明外，均采用 (CC)BY-NC-SA 许可协议。转载请注明出处！

{% links %}
- site: 咕咕咕
  owner: 咕
  url: https://github.com/CWYfiction/apk/blob/master/PicACG_2.1.0.7.apk
  desc: 奇怪的东西
  image: images/avatar.jpg
  color: "#9d5b8b"
{% endlinks %}

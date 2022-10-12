# 参考链接 https://blog.csdn.net/xiaowuwjw/article/details/124533574
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 注 进入生成的文件夹。须要与config.js中 dist属性配置的路径一致
cd .vuepress/dist 

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy.sh构建项目到 gh-pages分支'

# 如果发布到 https://<USERNAME>.github.io

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:T-1760/front_blogs.git master:gh-pages

cd -

# 注 最后发布的时候执行 bash deploy.sh
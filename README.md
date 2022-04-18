1. 编辑.env
2. yarn fetch
    会同步在/packages/react-icons/src/icons下生成对应目录文件，如果需要加前缀解析可以在/packages/react-icons/src/icons/index.js添加
3. ./build.sh build icon文件
4. cd 进入 生成的_react-icons_all
5. 手动发布



预览 暂时需要发布后在根目录里下载包后 yarn dev

todo 自动发布、生成预览页、删除冗余代码
     fetch前清理文件夹
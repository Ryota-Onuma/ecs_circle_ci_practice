## local環境
- webpackコンテナでbundleしたものを、appコンテナで読み込んで表示
- docker-compose.ymlとDockerfile.devでセッティングした
## production環境など
- Dockerfileのビルド時にVueのファイルをbundleして、それを直接public配下に配置し、表示するようにしている。

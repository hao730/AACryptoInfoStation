# vue 初始化測試項目

這個範本應該可以幫助您開始在 Vite 中使用 Vue 3 進行開發。

## 項目啟動設置

### 本機執行下載專案套件

```sh
npm install
```

### 開發中編譯程式

```sh
npm run dev
```

### 重新編譯程式

```sh
npm run build
```

## 將程式打包成docker image執行

### 進行打包

```sh
docker build -t vuedocker .
```

### 運行程式

```sh
run -p 8000:8000 -it --name vuedocker vuedocker
```

## 使用docker進行編譯

參考:https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l

### 運行此命令以在本機電腦上建立映像並啟動容器。您只需第一次運行此命令，並且每當您對 `docker-compose.yml`

```sh
docker-compose up --build --no-recreate -d
```

### 從第二次開始，我們就可以使用

```sh
docker-compose up -d
```
### 現在我們的容器已啟動，您應該能夠使用以下命令對其進行測試。

```sh
docker-compose ps
```

### 建置並啟動應用程式

```sh
docker exec -it vite_docker sh
```

### 進入容器執行命令來安裝Node套件並啟動應用程式

```sh
npm i && npm run dev
```
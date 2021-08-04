FROM node:lts
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive \
    NODE_ENV=production
WORKDIR /service
COPY . /service
RUN npm install yarn --registry https://registry.npm.taobao.org/; \
    yarn --registry https://registry.npm.taobao.org/
# RUN apt update \
#     && apt install -y tzdata \
#     && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
#     && echo ${TZ} > /etc/timezone \
#     && dpkg-reconfigure --frontend noninteractive tzdata \
#     && rm -rf /var/lib/apt/lists/*
EXPOSE 9007
CMD [ "node", "./index.js" ]





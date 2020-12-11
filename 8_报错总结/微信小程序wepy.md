# 微信小程序wepy报错

## wepy init standard XXX 报错

```
downloading template   wepy-cli · Failed to download repo standard: getaddrinfo ENOENT raw.githubusercontent.com raw.githubusercontent.com:443
```

**解决方法**

1. 打开目录：C:/Windows/System32/drivers/etc/
2. 找到 hosts 文件，打开记事本
3. 在文件最后添加 199.232.28.133 raw.githubusercontent.com
4. 保存文件
5. 重新运行命令即可成功
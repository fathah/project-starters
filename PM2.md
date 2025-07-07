# PM2

### Run `pm2` service
```
pm2 start "command" --name "project name"
```

### Run in specific PORT
```
pm2 start "npm run start -- -p 3017" --name "project name"
```

### `ecosystem.config.js`
```js
module.exports = {
  apps: [
    {
      name: 'app-name',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000, // fallback if no env
      },
    },
  ],
};

```

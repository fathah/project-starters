### Things to note before using Workflow codes.

Add secrets and Variables to the repo.

### Secrets
- `SERVER_HOST`
- `SERVER_USER`
- `SERVER_SSH_KEY`
- `APP_ENVS`

### Variables
- `NODE_VERSION`
- `SERVER_DEPLOY_PATH`


Copy `.env` to the Server
```sh
scp .env user@yourserver:/path/to/your/app/
```

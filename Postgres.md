# Postgres Setup and Management Commands

### Login
```sh
sudo -i -u postgres
```

### Common Commands
```sh
# Open the PostgreSQL shell
psql
```
### DB Commands
```sql
# Create a database
CREATE DATABASE dbname;

# Create a user
CREATE USER username WITH ENCRYPTED PASSWORD 'test';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE dbname TO username;

# Exit psql
\q
```

### Use Database
```sh
\c db_name
```

### List Tables
```sh
\dt
```

### Give schema access to user
```sql
GRANT USAGE ON SCHEMA public TO username;
GRANT CREATE ON SCHEMA public TO username;
GRANT ALL ON SCHEMA public TO username;
```



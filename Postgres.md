# Postgres Setup and Management Commands

### Login
```sh
sudo -i -u postgres
```

### Common Commands
```sh
# Open the PostgreSQL shell
psql

# Create a database
CREATE DATABASE mydb;

# Create a user
CREATE USER test WITH ENCRYPTED PASSWORD 'test';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE mydb TO test;

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



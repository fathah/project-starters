# MySQL Setup and Management Commands

### Install and Setup
```
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql.service
sudo mysql_secure_installation
```

## User Create/Modify
#### Create user
```
CREATE USER 'new_username'@'localhost' IDENTIFIED BY 'user_password';
```

#### Change User Password
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

#### Grant Access to DB
```
GRANT ALL PRIVILEGES ON database_name.* TO 'new_username'@'localhost';
```

#### Create DB
```
CREATE DATABASE databasename;
```

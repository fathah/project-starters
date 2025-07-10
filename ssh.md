### 🔑 1. Generate a new SSH key pair
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```
- -t ed25519 → use modern, secure Ed25519 key type
- -C → adds a label (your email) to help identify the key later
- By default, it saves to ~/.ssh/id_ed25519 and ~/.ssh/id_ed25519.pub

### 🔍 2. View your public key
```sh
cat ~/.ssh/id_ed25519.pub
```
✅ Always share the .pub file — never the private key!

### 📌 3. Copy the public key to the server
```sh
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@123.456.789.10
```
- Replace user with your remote username (e.g. ubuntu or fathah)
- Replace the IP with your server’s IP address

#### What this does:
- ✔️ Creates ~/.ssh on the server (if needed)
- ✔️ Adds your public key to ~/.ssh/authorized_keys
- ✔️ Sets correct permissions

### ✅ 4. Test the connection
```sh
ssh -i ~/.ssh/id_ed25519 user@123.456.789.10
```

### Read Private Key
```sh
cat ~/.ssh/id_ed25519
```

# Node Auth Demo

### Steps to Run Server Locally
- Create `.env` with below values or your own values
```shell
MONGO_URL=mongodb://localhost:27017/demo
PORT=8080
TOKEN_KEY=qK07SjypxORVsXRkpyrbodiu_dXKrr7XgKVq
```
- Run `npm install`
- Run `npm start`

### APIs

- Login
    - `/api/v1/user/login`
        
        Method: `Post`

        Request Body
        ```json
        {
            "email": "abhi12@example.com",
            "password": "aa123123"
        }
        ```

- Signup
    - `/api/v1/user/signup`
        
        Method: `Post`

        Request Body
        ```json
        {
            "email":"abhi12@example.com",
            "password":"aa123123",
            "firstName": "abhi",
            "lastName": "ankur"
        }
        ```

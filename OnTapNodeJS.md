## NodeJS - Express -> Server

## CRUD
- CREAD - POST
- READ - GET
- UPDATE - PUT/PATCH
- DELETE - DELETE

## MVC
- MODEL: truong trong DB (MONGDB, MYSQL...)
- VIEW: HANDLEBAR, EJS, PUBJS, POSTMAN TEST VIEW
- CONTROLLER: FUNCTION + ROUTE

## AUTH: REGISTER / LOGIN
### REGISTER
- Bước 1: Validation values
- Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
- Bước 3: Mã hoá mật khẩu
- Buoc 4: Tra ve message

### LOGIN
- Bước 1: Validate email
- Bước 2: Kiểm tra xem email có trong db hay không?
- Bước 3: Kiểm tra password
- Bước 4: Tạo ra token
- Buoc 5: Tra ve thong tin: token

## CheckPermission (middlerware (route, controller))
- Buoc 1: Kiem tra token header
- Bước 2: Verify token
- Bước 3: Find User từ token
- Bước 4: Check user.role (neu co)
- next()

## MONGODB -> Mongoose
- Find() -> GET ALL
- FinById(id) -> GET Detail
- FindOne({_id: Id}) -> Get Detail
- Save(), Create(): Luu data vao db -> POST
- UpdateOne({_id: ID}, {data update}) -> PUT
- DeletoneOne({_id: ID }) -> Delete

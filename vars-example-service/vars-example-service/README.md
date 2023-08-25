## 1. Hướng dẫn xây dựng API
### B1. Định nghĩa API tại tầng Controller
```java
@RestController
@RequestMapping("/users")
public class UserController extends BaseRestController {

    private UserService userService;

    /**
     * example
     * @param
     * @return
     */
    @GetMapping
    public ResponseEntity getListUser() {
        return RestUtils.responseOk(userService.getListUser());
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUserDetail(@PathVariable("userId") BigInteger userId) {
        return RestUtils.responseOk(userService.getUserDetail(userId));
    }

    @Autowired
    public void setUserService(UserServiceImpl userService) {
        this.userService = userService;
    }
}
```
Trong controller, các method gọi đến các phương thức trừu tượng trong service tương ứng
với nhiệm vụ của api đó

### B2. Xử lý Logic tại tầng Service

```java
public interface UserService {
    List<UserDTO> getListUser();
    UserDTO getUserDetail(BigInteger userId);
}
```
Các phương thức trừu tượng trên được triển khai (implement) ở class tương ứng với service đó
```java
@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService {

    @Override
    public List<UserDTO> getListUser() {
        List<User> users = userRepository.getListUser();
        List<UserDTO> data = userMapper.toDest(users);
        return data;
    }

    @Override
    public UserDTO getUserDetail(BigInteger userId) {
        User user = userRepository.getUserDetail(userId);
        UserDTO data = userMapper.toDest(user);
        return data;
    }

}
```

### B3. Xử lý truy vấn dữ liệu tại tầng Repository
```java
public interface UserRepository {
    List<User> getListUser();
    User getUserDetail(BigInteger userId);
}
```

```java
@Repository
public class UserRepositoryImpl implements UserRepository {
    @Override
    public List<User> getListUser() {
        List<User> list = new ArrayList<>();
        list.add(new User(BigInteger.valueOf(1), "Alex", "012345678"));
        list.add(new User(BigInteger.valueOf(2), "Jerry", "876543210"));
        return list;
    }

    @Override
    public User getUserDetail(BigInteger userId) {
        return new User(userId, "Tom Henry", "0384502893");
    }
}
```

### B4. Test API
Get List User
```
curl --location 'http://localhost:8080/example/users'
```
Get User Detail
```
curl --location 'http://localhost:8080/example/users/1'
```

## Lưu ý
Khi sử dụng Spring Boot để phát triển RESTful API cần lưu ý các annotations phổ biến như :
```
@RestController
@RequestMapping("")
@Service
@GetMapping
@PostMapping
...
```
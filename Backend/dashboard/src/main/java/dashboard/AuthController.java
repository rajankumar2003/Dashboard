package dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.register(user.getEmail(), user.getPassword()))
            return ResponseEntity.ok("Registered");
        return ResponseEntity.badRequest().body("Email exists");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if (userService.authenticate(user.getEmail(), user.getPassword()))
            return ResponseEntity.ok(JwtUtil.generateToken(user.getEmail()));
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader("Authorization") String auth) {
        String email = JwtUtil.validateToken(auth.replace("Bearer ", ""));
        return email != null ? ResponseEntity.ok(email) : ResponseEntity.status(401).body("Invalid");
    }
}


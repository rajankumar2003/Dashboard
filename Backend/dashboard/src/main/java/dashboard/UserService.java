package dashboard;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UserService {
    private final Map<String, String> users = new ConcurrentHashMap<>();
    public boolean register(String email, String password) {
        if (users.containsKey(email)) return false;
        users.put(email, password);
        return true;
    }
    public boolean authenticate(String email, String password) {
        return password.equals(users.get(email));
    }
}


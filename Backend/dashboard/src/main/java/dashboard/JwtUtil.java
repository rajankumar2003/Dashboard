package dashboard;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final Key key = Keys.hmacShaKeyFor("mysecretkeymysecretkeymysecretkey12".getBytes());
    private static final long EXP = 24*60*60*1000;
    public static String generateToken(String email) {
        return Jwts.builder()
            .setSubject(email)
            .setExpiration(new Date(System.currentTimeMillis() + EXP))
            .signWith(key)
            .compact();
    }
    public static String validateToken(String jwt) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(jwt).getBody().getSubject();
        } catch (Exception e) {
            return null;
        }
    }
}


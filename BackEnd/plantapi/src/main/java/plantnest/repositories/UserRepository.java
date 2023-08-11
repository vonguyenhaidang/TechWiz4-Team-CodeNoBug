package plantnest.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import plantnest.models.User;

@Repository
public class UserRepository {
	@Autowired
	JdbcTemplate db;

	class UserRowMapper implements RowMapper<User> {
		@Override
		public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User u = new User();
			u.setId(rs.getInt("id"));
			u.setUsername(rs.getString("username"));
			u.setEnabled(rs.getInt("enabled"));
			u.setRole(rs.getString("role"));
			u.setEmail(rs.getString("email"));
			u.setPassword(rs.getString("password"));
			return u;
		}
	}
	public List<User> getAllUser() {
		List<User> a = db.query("select * from tblUser", new UserRowMapper());
		return a;
	}
	public List<User> getAdmins() {
		List<User> a = db.query("select * from tblUser where role='ADMIN'", new UserRowMapper());
		return a;
	}
	
	public void addUser(User u) {
		db.update("insert into tblUser values(?,?,?,?,?)",
				new Object[] {u.getUsername(), 1, "USER", u.getEmail(), u.getPassword() });
	}
	public void addAdmin(User u) {
		db.update("insert into tblUser values(?,?,?,?,?)",
				new Object[] {u.getUsername(), 1, "ADMIN", u.getEmail(), u.getPassword() });
	}
	public void deleteAdmin(int id) {
		db.update("update tblUser set enabled=0 where id=?", new Object[] { id });
	}

}

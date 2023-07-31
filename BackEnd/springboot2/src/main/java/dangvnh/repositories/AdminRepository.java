package dangvnh.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import dangvnh.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class AdminRepository {
	@Autowired
	JdbcTemplate db;
	
	class AdminRowMapper implements RowMapper<Admin>{
		@Override
		public Admin mapRow(ResultSet rs,int rowNum) throws SQLException{
			Admin ad = new Admin();
			ad.setId(rs.getString("adminID"));
			ad.setUsername(rs.getString("username"));
			ad.setEnabled(rs.getInt("enabled"));
			ad.setRole(rs.getString("role"));
			ad.setEmail(rs.getString("email"));
			ad.setPassword(rs.getString("password"));
			ad.setAddress(rs.getString("address"));
			ad.setPhone(rs.getString("tel"));
			return ad;
			
		}
	}
	public List<Admin> loadAllAdmin() {
		return db.query("select * from tblAdmin", new AdminRowMapper());
	}
	public Admin findById(String id) {
		return db.queryForObject("select * from tblAdmin where adminID=?", new AdminRowMapper(),
				new Object[] { id });
	}
	public int deleteById(String id) {
		return db.update("delete from tblAdmin where adminID=?", new Object[] { id });
	}

	public int insert(Admin ad) {
		return db.update("insert into tblAdmin values (?,?,?,?,?,?,?,?)",
				new Object[] { ad.getId(),ad.getUsername(),ad.getEnabled(),ad.getRole(),ad.getEmail(),ad.getPassword(),ad.getPhone(),ad.getAddress()});
	}

	public int update(Admin ad) {
		return db.update("update tblAdmin" + " set username = ?, enabled = ?, role = ?, email = ?, password = ?, tel = ?, address = ?" + " where adminID = ?",
				new Object[] { ad.getUsername(),ad.getEnabled(),ad.getRole(),ad.getEmail(),ad.getPassword(),ad.getPhone(),ad.getAddress(),ad.getId()});
	}
}

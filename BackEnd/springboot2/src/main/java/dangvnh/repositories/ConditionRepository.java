package dangvnh.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import dangvnh.model.Condition;
import dangvnh.repositories.AdminRepository.AdminRowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class ConditionRepository {
	@Autowired
	JdbcTemplate db;
	
	class ConditionRowMapper implements RowMapper<Condition>{
		@Override
		public Condition mapRow(ResultSet rs, int rowNum) throws SQLException{
			Condition cd = new Condition();
			cd.setId(rs.getString("conID"));
			cd.setName(rs.getString("conName"));
			cd.setDesc(rs.getString("conDesc"));
			return cd;
		}
	}
	public List<Condition> loadAllCondition(){
		return db.query("select * from tblCondition", new ConditionRowMapper());
	}
	
	public Condition findById(String id) {
		return db.queryForObject("select * from tblCondition where conID=?", new ConditionRowMapper(),new Object[] {id});
	}
	
	public int deleteById(String id) {
		return db.update("delete from tblCondition where conID =?", new Object[] {id});
	}
	public int insert(Condition con) {
		return db.update("insert into tblCondition values (?,?,?)",
				new Object[] { con.getId(),con.getName(),con.getDesc()});
	}

	public int update(Condition con) {
		return db.update("update tblCondition" + " set conName = ?, conDesc = ?" + " where conID = ?",
				new Object[] { con.getName(),con.getDesc(),con.getId()});
	}
}

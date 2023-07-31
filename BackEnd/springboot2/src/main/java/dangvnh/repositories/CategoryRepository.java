package dangvnh.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import dangvnh.model.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class CategoryRepository {
	@Autowired
	JdbcTemplate db;
	
	class CategoryRowMapper implements RowMapper<Category>{
		@Override
		public Category mapRow(ResultSet rs, int rowNum) throws SQLException{
			Category cr = new Category();
			cr.setId(rs.getString("catID"));
			cr.setName(rs.getString("catName"));
			cr.setDesc(rs.getString("catDesc"));
			return cr;
		}
	}
	public List<Category> loadAllCat() {
		return db.query("select * from tblCategory", new CategoryRowMapper());
	}
	public Category findById(String id) {
		return db.queryForObject("select * from tblCategory where catID=?", new CategoryRowMapper(),
				new Object[] { id });
	}
	public int deleteById(String id) {
		return db.update("delete from tblCategory where catID=?", new Object[] { id });
	}

	public int insert(Category cat) {
		return db.update("insert into tblCategory values (?,?,?)",
				new Object[] { cat.getId(),cat.getName(),cat.getDesc()});
	}

	public int update(Category cat) {
		return db.update("update tblCategory" + " set catName = ?, catDesc = ?" + " where catID = ?",
				new Object[] { cat.getName(),cat.getDesc(),cat.getId()});
	}
}

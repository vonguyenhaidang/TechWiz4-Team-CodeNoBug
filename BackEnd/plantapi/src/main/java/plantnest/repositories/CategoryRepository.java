package plantnest.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import plantnest.models.Categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class CategoryRepository {
	@Autowired
	JdbcTemplate db;
	class CategoryRowMapper implements RowMapper<Categories>{
		@Override
		public Categories mapRow(ResultSet rs, int rowNum) throws SQLException{
			Categories ca = new Categories();
			ca.setCatID(rs.getInt("catID"));
			ca.setCatName(rs.getString("catName"));
			ca.setCatDesc(rs.getString("catDesc"));
			return ca;
		}
	}
	public List<Categories> loadAllCategories(){
		return db.query("exec selectCategory", new CategoryRowMapper());
	}
	
	public Categories findById(String id) {
		return db.queryForObject("select * from tblCategory where catID=?", new CategoryRowMapper(),
				new Object[] { id });
	}
	
	public int deleteById(String id) {
		return db.update("delete from tblCategory where catID=?", new Object[] { id });
	}

	public int insert(Categories cat) {
		return db.update("insert into tblCategory values (?,?,?)",
				new Object[] { cat.getCatID(),cat.getCatName(),cat.getCatDesc()});
	}

	public int update(Categories cat) {
		return db.update("update tblCategory" + " set catName = ?, catDesc = ?" + " where catID = ?",
				new Object[] {cat.getCatName(),cat.getCatDesc(), cat.getCatID()});
	}
}

package dangvnh.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import dangvnh.model.Product;
import dangvnh.repositories.CategoryRepository.CategoryRowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
@Repository
public class ProductRepository {
	@Autowired
	JdbcTemplate db;
	class ProductRowMapper implements RowMapper<Product>{
		@Override
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException{
			Product pr = new Product();
			pr.setId(rs.getString("prodID"));
			pr.setName(rs.getString("prodName"));
			pr.setPrice(rs.getFloat("prodPrice"));
			pr.setAvailable(rs.getInt("available"));
			pr.setCatID(rs.getString("catID"));
			pr.setConID(rs.getString("conID"));
			return pr;
		}
	}
	public List<Product> loadAllProd() {
		return db.query("select * from tblProducts", new ProductRowMapper());
	}
	public Product findById(String id) {
		return db.queryForObject("select * from tblProducts where prodID=?", new ProductRowMapper(),
				new Object[] { id });
	}
	public int deleteById(String id) {
		return db.update("delete from tblProducts where prodID=?", new Object[] { id });
	}

	public int insert(Product pro) {
		return db.update("insert into tblProducts values (?,?,?,?,?,?,?)",
				new Object[] { pro.getId(),pro.getName(),pro.getPrice(),pro.getDesc(),pro.getAvailable(),pro.getCatID(),pro.getConID()});
	}

	public int update(Product pro) {
		return db.update("update tblProducts" + " set prodName = ?, prodPrice = ?, prodDesc = ?, available = ?, catID = ?, conID = ?" + " where prodID = ?",
				new Object[] {pro.getName(),pro.getPrice(),pro.getDesc(),pro.getAvailable(),pro.getCatID(),pro.getConID(), pro.getId()});
	}
}

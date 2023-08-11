package plantnest.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import plantnest.models.Products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class ProductRepository {
	@Autowired
	JdbcTemplate db;
	class ProductRowMapper implements RowMapper<Products>{
		@Override
		public Products mapRow(ResultSet rs, int rowNum) throws SQLException{
			Products pr = new Products();
			pr.setProdID(rs.getInt("prodID"));
			pr.setProdName(rs.getString("prodName"));
			pr.setProdPrice(rs.getFloat("prodPrice"));
			pr.setProdDesc(rs.getString("prodDesc"));
			pr.setAvailable(rs.getInt("available"));
			pr.setImageUrl(rs.getString("ImageURL"));
			return pr;
			
		}
	}
	// Load all products into page
	public List<Products> loadAllProducts(){
		return db.query("exec loadAllProduct", new ProductRowMapper());
	}
	
	// Load a single product with ID
	public Products findById(String id) {
		return db.queryForObject("select * from tblProducts where prodID = ?", new ProductRowMapper(),
				new Object[] {id} );
	}
	// Delete a product on ID
	public int deleteById(String id) {
		return db.update("exec deleteProduct " + id, new Object[] {id});
	}
	
	// Insert a product - This procedure first create in tblProduct then to tblProduct_Category
	public int insert(Products pro,int catID) {
		return db.update("exec insertProductAndAddCat ?,?,?,?,?,?,?",
				new Object[] {pro.getProdID(),pro.getProdName(),pro.getProdPrice(),pro.getProdDesc(),pro.getAvailable(),pro.getImageUrl(),catID});
	}
	
	// Find products (Categories based)
	public List<Products>findByCategories(String id) {
		return db.query("select p.prodID,p.prodName,p.prodPrice,p.prodDesc,p.available,p.ImageURL from tblProducts p, tblProduct_Category pc\r\n"
				+ "where p.prodID = pc.prodID and pc.catID =" + id, new ProductRowMapper());
	}
	
	// Update Product - update a single product, still cannot update tblProduct_Category yet
	public int update(Products pro) {
		return db.update("update tblProducts" + " set prodName = ?, prodPrice = ?" + " , prodDesc = ?, available = ? ,ImageURL = ?"+" where prodID = ?",
				new Object[] {pro.getProdName(),pro.getProdPrice(),pro.getProdDesc(),pro.getAvailable(),pro.getImageUrl(),pro.getProdID()});
	}


}

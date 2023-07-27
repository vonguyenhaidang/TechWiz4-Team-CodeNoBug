package dangvnh.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import dangvnh.model.Customer;

@Repository
public class CustomerRepository {
	@Autowired
	JdbcTemplate db;

	class CustomerRowMapper implements RowMapper<Customer> {
		@Override
		public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
			Customer cus = new Customer();
			cus.setId(rs.getInt("id"));
			cus.setName(rs.getString("name"));
			cus.setEmail(rs.getString("email"));
			cus.setPhone(rs.getString("phone"));
			return cus;
		}
	}

	public List<Customer> findAll() {
		return db.query("select * from tblCustomer", new CustomerRowMapper());
	}

	public int insert(Customer customer) {
		return db.update("insert into tblCustomer " + "values(?, ?, ? ,?)",
				new Object[] {customer.getId(), customer.getName(), customer.getEmail(),customer.getPhone() });
	}


}

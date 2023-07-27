package dangvnh.dao;

import dangvnh.model.Customer;

public final class CustomerDAO {
	public static boolean newCategory(Customer cus) {
		try {
			
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}
	}
}

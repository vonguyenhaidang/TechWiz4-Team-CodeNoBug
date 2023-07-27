package dangvnh;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dangvnh.model.Customer;
import dangvnh.repositories.CustomerRepository;


@RestController
@RequestMapping("/api")
public class CustomerController {
	@Autowired
	CustomerRepository rep;
	
	@RequestMapping(value="/customers",method = RequestMethod.GET)
	List<Customer> all() {
		return rep.findAll();
	}
	@RequestMapping(value = "/customers", method = RequestMethod.POST)
	public int saveCategory(@Validated @RequestBody Customer cus) {
		return rep.insert(cus);
	}
}


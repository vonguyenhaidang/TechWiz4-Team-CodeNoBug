package dangvnh;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dangvnh.model.Admin;
import dangvnh.model.Category;
import dangvnh.model.Condition;
import dangvnh.model.Product;
import dangvnh.repositories.AdminRepository;
import dangvnh.repositories.CategoryRepository;
import dangvnh.repositories.ConditionRepository;
import dangvnh.repositories.ProductRepository;


@RestController
@RequestMapping("/api")
public class MainController {
	@Autowired
	AdminRepository adm ;
	
	@Autowired
	CategoryRepository ctg;
	
	@Autowired
	ConditionRepository cds;
	
	@Autowired
	ProductRepository pds;
	

	//ADMINISTRATOR CONTROLLERS/////////////////////////////////////////////
	@RequestMapping(value="/admin",method = RequestMethod.GET)
	List<Admin> getAllAd() {
		return adm.loadAllAdmin();
	}
	
	@RequestMapping(value = "/admin/{id}", method = RequestMethod.GET)
	Admin getAdmin(@PathVariable("id") String id) {
		return adm.findById(id);
	}
	@RequestMapping(value = "/admin/insert", method = RequestMethod.POST)
	public int saveAdmin(@Validated @RequestBody Admin admin) {
		return adm.insert(admin);
	}
	@RequestMapping(value = "/admin/update",method = RequestMethod.PUT)
	public int updateAdmin(@Validated @RequestBody Admin admin) {
		return adm.update(admin);
	}
	@RequestMapping(value = "/delad/{id}",method = RequestMethod.DELETE)
	public int deleteAdmin(@PathVariable("id") String id) {
		return adm.deleteById(id);
	}
	//ADMINISTRATOR CONTROLLERS/////////////////////////////////////////////
	
	//CATEGORY CONTROLLERS/////////////////////////////////////////////////
	@RequestMapping(value="/categories",method = RequestMethod.GET)
	List<Category> allCat() {
		return ctg.loadAllCat();
	}
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
	Category getCategory(@PathVariable("id") String id) {
		return ctg.findById(id);
	}
	@RequestMapping(value = "/categories/insert", method = RequestMethod.POST)
	public int saveCat(@Validated @RequestBody Category cat) {
		return ctg.insert(cat);
	}
	@RequestMapping(value = "/categories/update",method = RequestMethod.PUT)
	public int updateCat(@Validated @RequestBody Category cat) {
		return ctg.update(cat);
	}
	@RequestMapping(value = "/delcat/{id}",method = RequestMethod.DELETE)
	public int deleteCat(@PathVariable("id")String id) {
		return ctg.deleteById(id);
	}
	//CATEGORY CONTROLLERS/////////////////////////////////////////////////
	
	
	//CONDITION CONTROLLERS/////////////////////////////////////////////////
	@RequestMapping(value="/condition",method = RequestMethod.GET)
	List<Condition> getAllCon() {
		return cds.loadAllCondition();
	}
	
	@RequestMapping(value = "/condition/{id}", method = RequestMethod.GET)
	Condition getCondition(@PathVariable("id") String id) {
		return cds.findById(id);
	}
	@RequestMapping(value = "/condition/delete/{id}",method = RequestMethod.DELETE)
	public int deleteCon(@PathVariable("id")String id) {
		return cds.deleteById(id);
	}
	
	@RequestMapping(value = "/condition/insert", method = RequestMethod.POST)
	public int saveCon(@Validated @RequestBody Condition con) {
		return cds.insert(con);
	}
	@RequestMapping(value = "/condition/update",method = RequestMethod.PUT)
	public int updateCon(@Validated @RequestBody Condition con) {
		return cds.update(con);
	}
	//CONDITION CONTROLLERS/////////////////////////////////////////////////
	
	//PRODUCT CONTROLLERS/////////////////////////////////////////////////
	@RequestMapping(value="/product",method = RequestMethod.GET)
	List<Product> getAllPro() {
		return pds.loadAllProd();
	}
	
	@RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
	Product getProd(@PathVariable("id") String id) {
		return pds.findById(id);
	}
	@RequestMapping(value = "/product/delete/{id}",method = RequestMethod.DELETE)
	public int deleteProd(@PathVariable("id")String id) {
		return pds.deleteById(id);
	}
	
	@RequestMapping(value = "/product/insert", method = RequestMethod.POST)
	public int saveProd(@Validated @RequestBody Product pro) {
		return pds.insert(pro);
	}
	@RequestMapping(value = "/product/update",method = RequestMethod.PUT)
	public int updateCon(@Validated @RequestBody Product pro) {
		return pds.update(pro);
	}
	//PRODUCT CONTROLLERS/////////////////////////////////////////////////
}


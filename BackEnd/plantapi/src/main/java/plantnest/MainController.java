package plantnest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import plantnest.models.Categories;
import plantnest.models.Products;
import plantnest.repositories.CategoryRepository;
import plantnest.repositories.ProductRepository;
@RestController
@RequestMapping("/api")
public class MainController {
	@Autowired
	CategoryRepository cr;
	
	@Autowired
	ProductRepository pr;
	
	//Main page for API Testing
	

	// Code for Categories API
	@RequestMapping(value="/all_categories",method = RequestMethod.GET)
	List<Categories> loadAllCategories(){
		return cr.loadAllCategories();
	}
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
	Categories getCategory(@PathVariable("id") String id) {
		return cr.findById(id);
	}
	@RequestMapping(value = "/categories/insert", method = RequestMethod.POST)
	public int saveCat(@Validated @RequestBody Categories cat) {
		return cr.insert(cat);
	}
	@RequestMapping(value = "/categories/update",method = RequestMethod.PUT)
	public int updateCat(@Validated @RequestBody Categories cat) {
		return cr.update(cat);
	}
	@RequestMapping(value = "/delcat/{id}",method = RequestMethod.DELETE)
	public int deleteCat(@PathVariable("id")String id) {
		return cr.deleteById(id);
	}
	
	// Code for Product API
	@RequestMapping(value="/all_products",method = RequestMethod.GET)
	List<Products> loadAllProducts(){
		return pr.loadAllProducts();
	}
	@RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
	Products getAllProducts(@PathVariable("id") String id) {
		return pr.findById(id);
	}
	@RequestMapping(value="/products/cat/{id}",method = RequestMethod.GET)
	List<Products> findByCategories(@PathVariable("id") String id){
		return pr.findByCategories(id);
	}
	@RequestMapping(value = "/delproduct/{id}",method = RequestMethod.DELETE)
	public int deleteProduct(@PathVariable("id")String id) {
		return pr.deleteById(id);
	}
	
	
}

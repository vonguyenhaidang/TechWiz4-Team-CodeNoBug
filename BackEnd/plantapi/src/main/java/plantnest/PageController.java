package plantnest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import plantnest.models.User;
import plantnest.repositories.UserRepository;

@Controller
public class PageController {
	@Autowired
	UserRepository ur;
	
	@GetMapping("/")
	public String returnIndexPage() {
		return "pages/index";
	}
	@GetMapping("/noauth")
	public String noAuthentication() {
		return "pages/access";
	}

	@GetMapping("/user")
	public String returnUser() {
		return "pages/user";
	}
	@GetMapping("/register/new_user")
	public String registerUser() {
		return "pages/register_user";
	}
	@GetMapping("/admin")
	public String returnAdmin(ModelMap models) {
		List<User> admins = ur.getAdmins();
		System.out.println(admins);
		models.addAttribute("adminInfos", admins);
		return "/pages/admin";
	}
	
	@PostMapping("/useradd")
	public String registerUser(@RequestParam(value = "uname", required = true) String userName,
			@RequestParam(value = "uemail", required = true) String userEmail,
			@RequestParam(value = "upassword", required = true) String userPassword, ModelMap models) {
		List<User> user  = ur.getAllUser();
		int userID = user.size() + 2;
		String password = BCrypt.hashpw(userPassword, BCrypt.gensalt(10));
		User us = new User(userID, userName, 1, "USER", userEmail, password);	
		ur.addUser(us);
		return "redirect:/";
	}
	
	@PostMapping("/admin/add")
	public String addAdmin(@RequestParam(value = "name", required = true) String adminName,
			@RequestParam(value = "email", required = true) String adminEmail,
			@RequestParam(value = "password", required = true) String adminPassword, ModelMap models) throws Exception {
		String password = BCrypt.hashpw(adminPassword, BCrypt.gensalt(10));
		List<User> user = ur.getAllUser();
		int adminID = user.size() + 2;
		User us = new User(adminID, adminName, 1, "ADMIN", adminEmail, password);
		ur.addAdmin(us);
		List<User> la = ur.getAllUser();
		models.addAttribute("admin", la);
		return "redirect:/admin";
	}
	@RequestMapping(path="/admin/delete/{id}")
	public String delAdmin(@PathVariable int id, ModelMap models) {
		ur.deleteAdmin(id);
		List<User> user = ur.getAdmins();
		models.addAttribute("admin",user);
		return "redirect:/admin";
	}
}

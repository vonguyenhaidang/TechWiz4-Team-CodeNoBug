package plantnest.models;

public class User {
	private int id;
	private String username;
	private int enabled;
	private String role;
	private String email;
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getEnabled() {
		return enabled;
	}
	public void setEnabled(int enabled) {
		this.enabled = enabled;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public User() {
		super();
	}
	public User(int id, String username, int enabled, String role, String email, String password) {
		super();
		this.id = id;
		this.username = username;
		this.enabled = enabled;
		this.role = role;
		this.email = email;
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", enabled=" + enabled + ", role=" + role + ", email="
				+ email + ", password=" + password + "]";
	}
	
}

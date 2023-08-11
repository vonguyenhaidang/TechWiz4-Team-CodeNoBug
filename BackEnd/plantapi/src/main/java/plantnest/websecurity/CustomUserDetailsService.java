package plantnest.websecurity;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	private DataSource dataSource;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable().authorizeHttpRequests()
				.requestMatchers("/", "/register/new_user", "/useradd", "/noauth", "/assets/**", "/css/**", "/fonts/**",
						"/images/**", "/js/**", "/vendors/**", "/scss/**")
				.permitAll().and().authorizeHttpRequests().requestMatchers("/api/**", "/admin","/admin/delete/**","/admin/add").hasAnyAuthority("ADMIN")
				.requestMatchers("/user").hasAnyAuthority("USER").and().exceptionHandling().accessDeniedPage("/noauth")
				.and().formLogin().defaultSuccessUrl("/api/all_categories").and().logout().logoutSuccessUrl("/")
				// trả về page login nếu chưa authenticate
				.and().build();
	}

	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder()).dataSource(dataSource)
				.usersByUsernameQuery("select username,password,enabled from tblUser where username=?")
				.authoritiesByUsernameQuery("select username, role from tblUser where username=?")
		;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}

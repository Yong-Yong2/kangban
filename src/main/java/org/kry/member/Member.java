package org.kry.member;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // 사랑해요 롬북!
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Member {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(length = 30)
	@NotBlank(message = "아이디를 입력해주세요.")  //null, "", " " 비허용을 위함
	private String mid;
	
	@Column(length = 30)
	@NotBlank(message = "비밀번호를 입력해주세요.")
	private String mpw;
	
	@Column(length = 30)
	@NotBlank(message = "이름을 입력해주세요.")
	private String mname;
	
	@Column(length = 50)
	@NotBlank(message = "이메일을 입력해주세요.")
	private String memail;
	
	@Column(length = 500)
	@NotBlank(message = "주소를 입력해주세요.")
	private String maddress1;

	@Column(length = 500)
	@NotBlank(message = "상세주소를 입력해주세요.")
	private String maddress2;
	
}

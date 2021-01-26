
package org.kry.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberRepository memberRepository;
	
	@GetMapping({"", "/"})
	public ResponseEntity<Page<Member>> findAll(@PageableDefault(size = 5, sort = "id", direction = Sort.Direction.DESC) Pageable pageable, String search) {
		System.out.println("search : "+search);
		if(search.equals("")) {
			return new ResponseEntity<>(memberRepository.findAll(pageable), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(memberRepository.mFindSearch(pageable, search), HttpStatus.OK);
		}
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Member> save(@RequestBody Member member){
		Member memberEntity = memberRepository.save(member);
		return new ResponseEntity<>(memberEntity, HttpStatus.CREATED);
	}
	
	@PutMapping({"", "/"})
	public ResponseEntity<Member> update(@RequestBody Member member){
		Member memberEntity = memberRepository.save(member);
		return new ResponseEntity<>(memberEntity, HttpStatus.OK);
	}

}

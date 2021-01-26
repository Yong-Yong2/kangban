package org.kry.board;

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

@CrossOrigin
@RestController
@RequestMapping("/board")
public class BoardController {
	
	@Autowired
	private BoardRepository BoardRepository;
	
	@GetMapping({"", "/"})
	public ResponseEntity<Page<Board>> findAll(@PageableDefault(size = 5, sort = "id", direction = Sort.Direction.DESC) Pageable pageable, String search) {
		System.out.println("search : "+search);
		if(search.equals("")) {
			return new ResponseEntity<>(BoardRepository.findAll(pageable), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(BoardRepository.mFindSearch(pageable, search), HttpStatus.OK);
		}
		
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Board> save(@RequestBody Board Board){
		Board BoardEntity = BoardRepository.save(Board);
		return new ResponseEntity<>(BoardEntity, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Board> findById(@PathVariable long id){
		
		Board BoardEntity = BoardRepository.findById(id).orElseThrow(()-> {
			return new IllegalStateException("Board id not found");
		});
		return new ResponseEntity<>(BoardEntity, HttpStatus.CREATED);
	}
	
	@PutMapping({"", "/"})
	public ResponseEntity<Board> update(@RequestBody Board Board){
		Board BoardEntity = BoardRepository.save(Board);
		return new ResponseEntity<>(BoardEntity, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable long id){
		BoardRepository.deleteById(id);
		return new ResponseEntity<>("delete ok", HttpStatus.OK);
	}
}


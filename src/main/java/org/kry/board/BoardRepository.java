package org.kry.board;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Long> {
	
	@Query(value = "SELECT * FROM board WHERE title like %?1%", nativeQuery = true)
	Page<Board> mFindSearch(Pageable pageable, String search);
}

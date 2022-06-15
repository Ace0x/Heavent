USE heaventdb;
drop procedure compare_levelstats;
DELIMITER //
CREATE PROCEDURE compare_levelstats(IN id int, IN userId1 int, IN userId2 int)
BEGIN
	SELECT 
		*
    FROM 
		levelstats 
    WHERE 
		levelId = id AND (userId = userId1 OR userId = userId2);
END
//
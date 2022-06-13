USE heaventdb;
DELIMITER //
CREATE PROCEDURE compare_levelstats(IN levelId1 int, IN userId1 int, IN userId2 int )
BEGIN
	SELECT 
		userId, deaths, time, victories 
    FROM 
		user 
    WHERE 
		(userId = userId1 AND levelId = levelId) OR (userId = userId2 AND levelId = levelId);
END
//
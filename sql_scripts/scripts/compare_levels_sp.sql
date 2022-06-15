USE heaventdb;
DELIMITER //
CREATE PROCEDURE compare_levels(IN levelId1 int, IN levelId2 int)
BEGIN
	SELECT * FROM level WHERE id = levelId1 or id = levelId2;
END
//
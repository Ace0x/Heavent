USE heaventdb;
DELIMITER //
CREATE PROCEDURE ComparePlayersInLevel(IN userId int, IN levelId int)
BEGIN
	SELECT userId, deaths, time, victories FROM user WHERE userId = userId AND levelId = levelId;
END
//
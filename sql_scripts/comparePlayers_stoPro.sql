USE heaventdb;
DELIMITER //
CREATE PROCEDURE ComparePlayers(IN userId int)
BEGIN
	SELECT username, victory, played FROM user WHERE id = userId;
END
//
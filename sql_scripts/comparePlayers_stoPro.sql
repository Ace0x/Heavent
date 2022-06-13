USE heaventdb;
DELIMITER //
CREATE PROCEDURE compare_users(IN userId1 int, IN userId2 int)
BEGIN
	SELECT username, victory, played FROM user WHERE id = userId1 OR id = userId2;
END
//
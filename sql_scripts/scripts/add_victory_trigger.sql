USE heaventdb;
delimiter //
CREATE TRIGGER add_victory AFTER UPDATE ON levelstats
FOR EACH ROW
	UPDATE user 
	SET 
		victory = victory + NEW.victories 
	WHERE 
		id = NEW.userId;
//
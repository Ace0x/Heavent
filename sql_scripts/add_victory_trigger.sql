USE heaventdb;
delimiter //
CREATE TRIGGER add_victory AFTER UPDATE ON levelstats
FOR EACH ROW
BEGIN
	IF (NEW.time > 0) THEN
		UPDATE user 
		SET 
			victory = victory + 1
		WHERE 
			id = NEW.userId;
	END IF;
END;
//
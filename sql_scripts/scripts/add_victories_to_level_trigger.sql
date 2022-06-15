USE heaventdb;
delimiter //
CREATE TRIGGER add_victories_to_level AFTER UPDATE ON levelstats
FOR EACH ROW
BEGIN
	IF (NEW.victories > OLD.victories) THEN
		UPDATE level 
		SET 
			totalVictories = totalVictories + 1
	WHERE 
		id = NEW.levelId;
	END IF;
END;
//
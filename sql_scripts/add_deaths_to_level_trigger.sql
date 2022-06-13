USE heaventdb;
delimiter //
CREATE TRIGGER add_deaths_to_level AFTER UPDATE ON levelstats
FOR EACH ROW
BEGIN
	IF (NEW.deaths > OLD.deaths) THEN
		UPDATE level 
		SET 
			totalDeaths = totalDeaths + 1
	WHERE 
		id = NEW.levelId;
	END IF;
END;
//
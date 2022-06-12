USE heaventdb;
delimiter //
CREATE TRIGGER add_death_toll AFTER UPDATE ON levelstats
FOR EACH ROW
	UPDATE level 
	SET 
		totalDeaths = totalDeaths + NEW.deaths 
	WHERE 
		id = NEW.userId;
//
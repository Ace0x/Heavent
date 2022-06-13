USE heaventdb;
delimiter //
CREATE TRIGGER update_victory_and_deaths AFTER UPDATE ON levelstats
FOR EACH ROW
	UPDATE levelstats 
	SET 
		deaths = deaths + NEW.deaths,
        victories = victories + NEW.victories
	WHERE 
		id = OLD.id
//
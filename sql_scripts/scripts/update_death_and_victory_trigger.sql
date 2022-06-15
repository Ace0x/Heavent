USE heaventdb;
delimiter //
CREATE TRIGGER update_victory_and_death AFTER UPDATE ON levelstats
FOR EACH ROW
	UPDATE levelstats 
	SET 
		deaths = OLD.deaths + NEW.deaths,
		victories = OLD.victories + NEW.victories
	WHERE 
		id = NEW.userId
//
USE heaventdb;
DELIMITER //
CREATE TRIGGER add_victory_to_stats AFTER UPDATE on level
FOR EACH ROW
	UPDATE levelstats
	SET
		victories = victories + 1
	WHERE 
		levelId = OLD.id
//
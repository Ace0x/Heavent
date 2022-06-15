USE heaventdb;
DELIMITER //
CREATE TRIGGER add_death_to_stats AFTER UPDATE on level
FOR EACH ROW
	UPDATE levelstats
	SET
		deaths = deaths + 1
	WHERE 
		levelId = OLD.id
//
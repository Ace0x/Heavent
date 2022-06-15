USE heaventdb;
delimiter //
CREATE TRIGGER delete_levelstats AFTER DELETE ON level
FOR EACH ROW
	DELETE FROM levelstats 
	WHERE 
		levelId = OLD.id;
//
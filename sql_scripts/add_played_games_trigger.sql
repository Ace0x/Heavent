USE heaventdb;
delimiter //
CREATE TRIGGER add_played_games AFTER UPDATE ON levelstats
FOR EACH ROW
	UPDATE user 
	SET 
		played = played+1
	WHERE 
		id = NEW.userId;
//
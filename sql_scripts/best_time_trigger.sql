USE heaventdb;
delimiter //
CREATE TRIGGER best_time AFTER UPDATE ON levelstats
FOR EACH ROW
BEGIN
	IF (NEW.time < OLD.time) THEN
		UPDATE levelstats 
		SET 
			time = NEW.time
		WHERE 
			id = NEW.id;
	END IF;
END;
//



        
		
    

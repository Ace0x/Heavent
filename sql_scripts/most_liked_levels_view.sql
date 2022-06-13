USE heaventdb;
DELIMITER //
CREATE VIEW most_liked_levels AS
	SELECT 
		id, name, likes
	FROM 
		level
	ORDER BY
		likes DESC
//
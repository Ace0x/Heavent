USE heaventdb;
DELIMITER //
CREATE VIEW most_played_players AS
	SELECT *
	FROM 
		user
	ORDER BY
		played DESC
//
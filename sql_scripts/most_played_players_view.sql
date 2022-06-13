USE heaventdb;
DELIMITER //
CREATE VIEW most_played_players AS
	SELECT username, id, played
	FROM 
		user
	ORDER BY
		played DESC
//
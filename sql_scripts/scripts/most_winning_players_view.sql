USE heaventdb;
DELIMITER //
CREATE VIEW most_winning_players AS
	SELECT username, id, victory
	FROM 
		user
	ORDER BY
		victory DESC
//
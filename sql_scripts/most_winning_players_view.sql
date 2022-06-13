USE heaventdb;
DELIMITER //
CREATE VIEW most_winning_players AS
	SELECT *
	FROM 
		user
	ORDER BY
		victory DESC
//
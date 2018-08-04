export let createCompanyTableQuery = 'CREATE TABLE IF NOT EXISTS company('
                    + 'id INT NOT NULL AUTO_INCREMENT,'
                    + 'PRIMARY KEY(id),'
                    + 'name VARCHAR(50),'
                    + 'posting_url VARCHAR(250),'
                    + 'status VARCHAR(30))';

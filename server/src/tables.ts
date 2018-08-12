export let createCompanyTableQuery = 'CREATE TABLE IF NOT EXISTS company('
                    + 'id INT NOT NULL AUTO_INCREMENT,'
                    + 'PRIMARY KEY(id),'
                    + 'name VARCHAR(50) NOT NULL,'
                    + 'website_url VARCHAR(250),'
                    + 'posting_url VARCHAR(250),'
                    + 'posting_content TEXT,'
                    + 'status VARCHAR(30))';

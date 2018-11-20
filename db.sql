CREATE TABLE User (
    id INT  NOT NULL AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE company (
    id INT NOT NULL AUTO_INCREMENT,
    clicks UNSIGNED INT DEFAULT 0,
    name VARCHAR(64) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    website_link VARCHAR(512) NOT NULL,
    wikipedia_link VARCHAR(512) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE position (
    id INT NOT NULL AUTO_INCREMENT,
    company_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    link VARCHAR(512),
    location VARCHAR(64),
    FOREIGN KEY (company_id) REFERENCES company(company_id),
    PRIMARY KEY (id)
)

CREATE TABLE position_history (
    id INT NOT NULL AUTO_INCREMENT,
    position_id INT NOT NULL,
    year INT NOT NULL,
    open_date DATE,
    close_date DATE,
    FOREIGN KEY (position_id) REFERENCES position(position_id)
    PRIMARY KEY(id)
)
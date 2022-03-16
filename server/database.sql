DROP DATABASE IF EXISTS moog_db;
CREATE DATABASE moog_db;

\c moog_db;

DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Templates CASCADE;
DROP TABLE IF EXISTS Favorites CASCADE;
DROP TABLE IF EXISTS Pages CASCADE;

CREATE TABLE Users
(
    ID SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL
);

CREATE TABLE Templates
(
    ID SERIAL PRIMARY KEY,
    template_name TEXT,
    page_total INTEGER
);

CREATE TABLE Pages
(
    ID SERIAL PRIMARY KEY,
    template_id INTEGER REFERENCES Templates(ID),
    page_number INTEGER,
    page_name TEXT,
    tags TEXT
);

CREATE TABLE Favorites
(
    ID SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(ID) ON DELETE CASCADE,
    template_id INTEGER REFERENCES Templates(ID) ON DELETE CASCADE,
    page_id INTEGER REFERENCES Pages(ID) ON DELETE CASCADE
);

-- ALTER TABLE Pages ADD CONSTRAINT "fk_Pages_template_id" FOREIGN KEY("template_id")
-- REFERENCES Templates(ID);

-- ALTER TABLE Favorites ADD CONSTRAINT "fk_Favorites_user_id" FOREIGN KEY("user_id")
-- REFERENCES users(ID);

-- ALTER TABLE Favorites ADD CONSTRAINT "fk_Favorites_template_id" FOREIGN KEY("template_id")
-- REFERENCES Templates (ID);

-- ALTER TABLE Favorites ADD CONSTRAINT "fk_Favorites_page_number" FOREIGN KEY("page_number")
-- REFERENCES Pages (page_number);

-- ALTER TABLE Favorites ADD CONSTRAINT "fk_Favorites_page_name" FOREIGN KEY("page_name")
-- REFERENCES Pages (page_name);

-- ALTER TABLE Favorites ADD CONSTRAINT "fk_Favorites_tags" FOREIGN KEY("tags")
-- REFERENCES Pages (tags);

INSERT INTO Users
(username, password, email)
VALUES
('testuser','testpassword','test@test.com');

INSERT INTO Templates
(template_name, page_total)
VALUES
('Dark', 19), ('LBD', 15), ('Mike Dean', 9);

INSERT INTO Pages
(template_id, page_number, page_name, tags)
VALUES
(1, 1,'Cover','Cover'), 
(1, 2,'Description','Description'), 
(1,3,'Disco Tom','Percussion'), 
(1,4,'Drone Tides','Lead'), 
(1,5,'Evolution Arp','Arp'),
(1,6,'Fat Pluck Bass','Bass'), 
(1,7,'Organ Lead','Lead'), 
(1,8,'Short Flutey Arp','Arp'),
(1,9,'Soft Sizzle Lead','Lead'),
(1,10,'Silky Lead','Lead'), 
(1,11,'Syncy Slink Lead','Lead'),
(1,12,'Wrecked Bass','Bass'),
(1,13,'Slowfire','Lead'),
(1,14,'Star-Weaver','Lead'),
(1,15,'Phases','Lead'),
(1,16,'The Dream','Lead'),
(1,17,'Cosmochordal','Chord'),
(1,18,'Disco-Drone','Arp'),
(1,19,'End Page','End Page');

INSERT INTO Pages
(template_id, page_number, page_name, tags)
VALUES 
(2, 1, 'Cover','Cover'),
(2, 2, 'Description','Description'),
(2, 3, 'Chocolate Factory','Arp'),
(2, 4, '1976 TEXTEnsemble','Lead'),
(2, 5, 'Summer Of 76','Lead'),
(2, 6, 'Des Morts','SFX'),
(2, 7, 'Power Trio','Lead'),
(2, 8, 'Space Phaser Solo','Drone'),
(2, 9, 'Hunter Sequencer','Arp'),
(2, 10, 'After-Image', 'Arp'),
(2, 11, 'Bass/ W Auto Drums','Bass'),
(2, 12, '1981 SEQ','Arp'),
(2, 13, 'Electronic Forests','Arp'),
(2, 14, 'Nite Shift','Arp'),
(2, 15, 'End Page','End Page');

INSERT INTO Pages
(template_id, page_number, page_name, tags)
VALUES 
(3, 1, 'Cover','Cover'),
(3, 2, 'Description','Description'),
(3, 3, 'Snare','Percussion'),
(3, 4, 'Filter Resonance Pluck','Pluck'),
(3, 5, '909 Kick','Percussion'),
(3, 6, 'Feedback Overload','Lead'),
(3, 7, 'Lead Synth','Lead'),
(3, 8, 'Windy Flute','Lead'),
(3, 9, 'End Page','End Page');

INSERT INTO Favorites
(user_id, template_id, page_id)
VALUES
(1, 1, 14);
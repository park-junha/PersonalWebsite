DROP TABLE IF EXISTS Experience;
DROP TABLE IF EXISTS Technologies;
DROP TABLE IF EXISTS PersonalProjects;
DROP TABLE IF EXISTS ProfessionalProjects;
DROP TABLE IF EXISTS OpenSourceProjects;

CREATE TABLE IF NOT EXISTS Experience (
  experience_id CHAR(4) PRIMARY KEY
  , label TEXT NOT NULL
  , company TEXT NOT NULL
  , title TEXT NOT NULL
  , start_date DATE NOT NULL
  , end_date DATE
  , description TEXT []
);

CREATE TABLE IF NOT EXISTS Technologies (
  tech_id CHAR(4) PRIMARY KEY
  , name TEXT
  , color CHAR(7)
);

CREATE TABLE IF NOT EXISTS PersonalProjects (
  project_id CHAR(4) PRIMARY KEY
  , title TEXT
  , description TEXT
  , about TEXT
  , url TEXT
  , source_code_url TEXT
  , languages CHAR(4) []
  , other_tools CHAR(4) []
);

CREATE TABLE IF NOT EXISTS ProfessionalProjects (
  project_id CHAR(4) PRIMARY KEY
  , title TEXT
  , description TEXT
  , about TEXT
  , url TEXT
  , source_code_url TEXT
  , languages CHAR(4) []
  , other_tools CHAR(4) []
);

CREATE TABLE IF NOT EXISTS OpenSourceProjects (
  project_id CHAR(4) PRIMARY KEY
  , title TEXT
  , description TEXT
  , about TEXT
  , url TEXT
  , source_code_url TEXT
  , languages CHAR(4) []
  , other_tools CHAR(4) []
);

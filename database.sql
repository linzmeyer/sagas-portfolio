CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "tag_id" INT REFERENCES "tags",
    "date_completed" date not null default CURRENT_DATE
);

-- test data for tags table
INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

-- test data for projects table
INSERT INTO "projects" ("name"), ("description"), ("thumbnail"), ("website"), ("github"), ("date_completed"), ("tag_id")
VALUES ('redux-feedback-loop'), ('SPA form using Redux.'), ('thumbnail'), ('https://github.com/linzmeyer/redux-feedback-loop'), ('https://github.com/linzmeyer/redux-feedback-loop'), (5);
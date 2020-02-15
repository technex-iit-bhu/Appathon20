CREATE TABLE IF NOT EXISTS users (
  name TEXT not null,
  uuid TEXT unique not null
);

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name TEXT not null,
  description TEXT not null,
  price INTEGER not null,
  url TEXT not null
);

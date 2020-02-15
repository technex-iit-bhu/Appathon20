# VR Shop - Appathon, Technex, 2020
## Server Side Code

+ Minimal Flask server(no GUI/web interface)
+ To initialize DB, hit `flask initdb`. That'll call `initdb_command` method in `app.py` and read `schema.sql`
+ `schema.sql` is self explanatory file
+ Not using any SQL helper. Creating a Postgres DB(`hobby-dev` plan) on heroku
+ Hosted on Heroku
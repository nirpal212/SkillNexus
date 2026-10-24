import sqlite3

connection = sqlite3.connect("skillnexus.db")

try:
    connection.execute("""
        ALTER TABLE opportunities
        ADD COLUMN industry_id INTEGER
    """)

    connection.commit()

    print("industry_id column added successfully!")

except sqlite3.OperationalError as error:
    if "duplicate column name" in str(error).lower():
        print("industry_id column already exists.")
    else:
        print("Database update error:", error)

finally:
    connection.close()
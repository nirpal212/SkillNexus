import sqlite3
import csv
import os


DATABASE_NAME = "skillnexus.db"

CSV_FILE = os.path.join(
    "dataset",
    "skillnexus_career_skills_dataset.csv"
)


def import_dataset():

    if not os.path.exists(CSV_FILE):
        print("❌ Dataset file not found!")
        print("Expected location:")
        print(CSV_FILE)
        return

    connection = sqlite3.connect(DATABASE_NAME)

    cursor = connection.cursor()

    # Remove old career_skills table if it exists
    cursor.execute("DROP TABLE IF EXISTS career_skills")

    # Create career_skills table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS career_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            career_role TEXT NOT NULL,
            skill TEXT NOT NULL,
            category TEXT,
            importance TEXT,
            skill_level TEXT,
            learning_topic TEXT,
            learning_priority INTEGER,
            UNIQUE(career_role, skill)
        )
    """)

    # Read CSV file
    with open(
        CSV_FILE,
        "r",
        encoding="utf-8-sig"
    ) as file:

        reader = csv.DictReader(file)

        rows_imported = 0

        for row in reader:

            cursor.execute("""
                INSERT OR IGNORE INTO career_skills
                (
                    career_role,
                    skill,
                    category,
                    importance,
                    skill_level,
                    learning_topic,
                    learning_priority
                )
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (
                row["career_role"],
                row["skill"],
                row["category"],
                row["importance"],
                row["skill_level"],
                row["learning_topic"],
                int(row["learning_priority"])
            ))

            if cursor.rowcount > 0:
                rows_imported += 1

    connection.commit()

    # Check total records
    cursor.execute(
        "SELECT COUNT(*) FROM career_skills"
    )

    total_records = cursor.fetchone()[0]

    connection.close()

    print()
    print("======================================")
    print("SkillNexus Dataset Import Complete")
    print("======================================")
    print(f"New records imported: {rows_imported}")
    print(f"Total records in database: {total_records}")
    print("======================================")


if __name__ == "__main__":
    import_dataset()
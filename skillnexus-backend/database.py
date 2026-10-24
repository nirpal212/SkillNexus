import sqlite3

DATABASE_NAME = "skillnexus.db"


def get_connection():
    connection = sqlite3.connect(DATABASE_NAME)
    connection.row_factory = sqlite3.Row
    return connection


def init_database():
    connection = get_connection()

    # Students table
    connection.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            education TEXT NOT NULL,
            career_goal TEXT NOT NULL,
            skills TEXT NOT NULL
        )
    """)

    # Learning progress table
    connection.execute("""
        CREATE TABLE IF NOT EXISTS learning_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            completed_weeks TEXT NOT NULL DEFAULT '[]',
            FOREIGN KEY (student_id) REFERENCES students(id)
        )
    """)
        # Opportunities table
    # Opportunities table
    connection.execute("""
        CREATE TABLE IF NOT EXISTS opportunities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            industry_id INTEGER,
            title TEXT NOT NULL,
            company TEXT NOT NULL,
            opportunity_type TEXT NOT NULL,
            required_skills TEXT NOT NULL,
            description TEXT,
            location TEXT,
            application_link TEXT,
            FOREIGN KEY (industry_id) REFERENCES industries(id)
        )
    """)
    connection.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(id)
    )
""")
        # Industry table
    connection.execute("""
        CREATE TABLE IF NOT EXISTS industries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            industry_type TEXT NOT NULL,
            location TEXT,
            about_company TEXT,
            website TEXT
        )
    """)
        # Faculty table
    connection.execute("""
        CREATE TABLE IF NOT EXISTS faculties (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            department TEXT NOT NULL,
            institution TEXT NOT NULL
        )
    """)

    connection.commit()
    connection.close()


if __name__ == "__main__":
    init_database()
    print("SkillNexus database initialized successfully!")
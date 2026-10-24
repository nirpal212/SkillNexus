from flask import Flask, jsonify, request
from flask_cors import CORS
from database import get_connection, init_database
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Initialize database
init_database()


# =========================================================
# HOME
# =========================================================

@app.route("/")
def home():
    return jsonify({
        "message": "SkillNexus Backend is running successfully!"
    })


# =========================================================
# TEST API
# =========================================================

@app.route("/api/test")
def test():
    return jsonify({
        "status": "success",
        "message": "SkillNexus API is working!"
    })


# =========================================================
# CREATE STUDENT
# =========================================================

@app.route("/api/students", methods=["POST"])
def create_student():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    name = data.get("name")
    email = data.get("email", "")
    education = data.get("education")
    career_goal = data.get("career_goal")
    skills = data.get("skills")

    if not name or not education or not career_goal or not skills:
        return jsonify({
            "status": "error",
            "message": "Name, education, career goal and skills are required."
        }), 400

    connection = get_connection()

    cursor = connection.execute(
        """
        INSERT INTO students
        (name, email, education, career_goal, skills)
        VALUES (?, ?, ?, ?, ?)
        """,
        (name, email, education, career_goal, skills)
    )

    connection.commit()

    student_id = cursor.lastrowid

    connection.close()

    return jsonify({
        "status": "success",
        "message": "Student created successfully!",
        "student_id": student_id
    }), 201


# =========================================================
# GET ALL STUDENTS
# =========================================================

@app.route("/api/students", methods=["GET"])
def get_students():

    connection = get_connection()

    students = connection.execute(
        "SELECT * FROM students ORDER BY id DESC"
    ).fetchall()

    connection.close()

    student_list = [dict(student) for student in students]

    return jsonify({
        "status": "success",
        "students": student_list
    })


# =========================================================
# SIGNUP
# =========================================================

@app.route("/api/signup", methods=["POST"])
def signup():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    education = data.get("education")
    career_goal = data.get("career_goal")
    skills = data.get("skills")

    if not name or not email or not password or not education or not career_goal or not skills:
        return jsonify({
            "status": "error",
            "message": "All fields are required."
        }), 400

    if len(password) < 6:
        return jsonify({
            "status": "error",
            "message": "Password must be at least 6 characters."
        }), 400

    connection = get_connection()

    existing_user = connection.execute(
        "SELECT id FROM users WHERE email = ?",
        (email,)
    ).fetchone()

    if existing_user:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "An account with this email already exists."
        }), 409

    # Create student profile
    cursor = connection.execute(
        """
        INSERT INTO students
        (name, email, education, career_goal, skills)
        VALUES (?, ?, ?, ?, ?)
        """,
        (
            name,
            email,
            education,
            career_goal,
            skills
        )
    )

    student_id = cursor.lastrowid

    # Hash password
    hashed_password = generate_password_hash(password)

    # Create user account
    connection.execute(
        """
        INSERT INTO users
        (student_id, email, password)
        VALUES (?, ?, ?)
        """,
        (
            student_id,
            email,
            hashed_password
        )
    )

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Account created successfully!",
        "student_id": student_id
    }), 201
@app.route("/api/faculty/signup", methods=["POST"])
def faculty_signup():

    data = request.get_json()

    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()
    department = data.get("department", "").strip()
    institution = data.get("institution", "").strip()

    if not name or not email or not password or not department or not institution:
        return jsonify({
            "status": "error",
            "message": "Please fill all the fields."
        }), 400

    if len(password) < 6:
        return jsonify({
            "status": "error",
            "message": "Password must be at least 6 characters long."
        }), 400

    connection = get_connection()

    existing_faculty = connection.execute(
        "SELECT id FROM faculties WHERE email = ?",
        (email,)
    ).fetchone()

    if existing_faculty:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "A faculty account with this email already exists."
        }), 409

    hashed_password = generate_password_hash(password)

    cursor = connection.execute(
        """
        INSERT INTO faculties
        (
            name,
            email,
            password,
            department,
            institution
        )
        VALUES (?, ?, ?, ?, ?)
        """,
        (
            name,
            email,
            hashed_password,
            department,
            institution
        )
    )

    faculty_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Faculty account created successfully.",
        "faculty_id": faculty_id
    }), 201
# =========================================================
# INDUSTRY - SIGNUP
# =========================================================

@app.route("/api/industry/signup", methods=["POST"])
def industry_signup():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    company_name = data.get("company_name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()
    industry_type = data.get("industry_type", "").strip()
    location = data.get("location", "").strip()
    about_company = data.get("about_company", "").strip()
    website = data.get("website", "").strip()

    # Required fields
    if not company_name or not email or not password or not industry_type:
        return jsonify({
            "status": "error",
            "message": "Company name, email, password and industry type are required."
        }), 400

    # Password validation
    if len(password) < 6:
        return jsonify({
            "status": "error",
            "message": "Password must be at least 6 characters long."
        }), 400

    connection = get_connection()

    # Check existing industry account
    existing_industry = connection.execute(
        "SELECT id FROM industries WHERE email = ?",
        (email,)
    ).fetchone()

    if existing_industry:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "An industry account with this email already exists."
        }), 409

    # Hash password
    hashed_password = generate_password_hash(password)

    # Create industry account
    cursor = connection.execute(
        """
        INSERT INTO industries
        (
            company_name,
            email,
            password,
            industry_type,
            location,
            about_company,
            website
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        (
            company_name,
            email,
            hashed_password,
            industry_type,
            location,
            about_company,
            website
        )
    )

    industry_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Industry account created successfully.",
        "industry_id": industry_id
    }), 201
# =========================================================
# INDUSTRY - LOGIN
# =========================================================

@app.route("/api/industry/login", methods=["POST"])
def industry_login():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    if not email or not password:
        return jsonify({
            "status": "error",
            "message": "Email and password are required."
        }), 400

    connection = get_connection()

    industry = connection.execute(
        "SELECT * FROM industries WHERE email = ?",
        (email,)
    ).fetchone()

    connection.close()

    if not industry:
        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    if not check_password_hash(industry["password"], password):
        return jsonify({
            "status": "error",
            "message": "Invalid email or password."
        }), 401

    return jsonify({
        "status": "success",
        "message": "Industry login successful.",
        "industry": {
            "id": industry["id"],
            "company_name": industry["company_name"],
            "email": industry["email"],
            "industry_type": industry["industry_type"],
            "location": industry["location"],
            "about_company": industry["about_company"],
            "website": industry["website"]
        }
    }), 200
# =========================================================
# INDUSTRY - GET PROFILE
# =========================================================

@app.route("/api/industry/profile/<int:industry_id>", methods=["GET"])
def get_industry_profile(industry_id):

    connection = get_connection()

    industry = connection.execute(
        "SELECT * FROM industries WHERE id = ?",
        (industry_id,)
    ).fetchone()

    connection.close()

    if not industry:
        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    return jsonify({
        "status": "success",
        "industry": {
            "id": industry["id"],
            "company_name": industry["company_name"],
            "email": industry["email"],
            "industry_type": industry["industry_type"],
            "location": industry["location"],
            "about_company": industry["about_company"],
            "website": industry["website"]
        }
    }), 200


# =========================================================
# INDUSTRY - UPDATE PROFILE
# =========================================================

@app.route("/api/industry/profile/<int:industry_id>", methods=["PUT"])
def update_industry_profile(industry_id):

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    company_name = data.get("company_name", "").strip()
    email = data.get("email", "").strip().lower()
    industry_type = data.get("industry_type", "").strip()
    location = data.get("location", "").strip()
    about_company = data.get("about_company", "").strip()
    website = data.get("website", "").strip()

    if not company_name or not email or not industry_type:
        return jsonify({
            "status": "error",
            "message": "Company name, email and industry type are required."
        }), 400

    connection = get_connection()

    industry = connection.execute(
        "SELECT id FROM industries WHERE id = ?",
        (industry_id,)
    ).fetchone()

    if not industry:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    # Check whether another industry is already using this email
    existing_email = connection.execute(
        """
        SELECT id FROM industries
        WHERE email = ? AND id != ?
        """,
        (email, industry_id)
    ).fetchone()

    if existing_email:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Another industry account already uses this email."
        }), 409

    connection.execute(
        """
        UPDATE industries
        SET
            company_name = ?,
            email = ?,
            industry_type = ?,
            location = ?,
            about_company = ?,
            website = ?
        WHERE id = ?
        """,
        (
            company_name,
            email,
            industry_type,
            location,
            about_company,
            website,
            industry_id
        )
    )

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Industry profile updated successfully.",
        "industry": {
            "id": industry_id,
            "company_name": company_name,
            "email": email,
            "industry_type": industry_type,
            "location": location,
            "about_company": about_company,
            "website": website
        }
    }), 200
# =========================================================
# INDUSTRY - DASHBOARD
# =========================================================


@app.route("/api/industry/dashboard/<int:industry_id>", methods=["GET"])
def industry_dashboard(industry_id):

    connection = get_connection()

    # Get industry details
    industry = connection.execute(
        "SELECT * FROM industries WHERE id = ?",
        (industry_id,)
    ).fetchone()

    if not industry:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    # Count opportunities posted by this industry
    opportunity_count = connection.execute(
        """
        SELECT COUNT(*)
        FROM opportunities
        WHERE industry_id = ?
        """,
        (industry_id,)
    ).fetchone()[0]

    # Applications will be connected in the next stage
    application_count = 0

    # Candidate matching will be connected in the next stage
    matching_candidates = 0

    connection.close()

    return jsonify({
        "status": "success",
        "industry": {
            "id": industry["id"],
            "company_name": industry["company_name"],
            "email": industry["email"],
            "industry_type": industry["industry_type"],
            "location": industry["location"],
            "about_company": industry["about_company"],
            "website": industry["website"]
        },
        "statistics": {
            "opportunities": opportunity_count,
            "applications": application_count,
            "matching_candidates": matching_candidates
        }
    }), 200
@app.route("/api/faculty/login", methods=["POST"])
def faculty_login():

    data = request.get_json()

    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    if not email or not password:
        return jsonify({
            "status": "error",
            "message": "Please enter email and password."
        }), 400

    connection = get_connection()

    faculty = connection.execute(
        """
        SELECT *
        FROM faculties
        WHERE email = ?
        """,
        (email,)
    ).fetchone()

    connection.close()

    if not faculty:
        return jsonify({
            "status": "error",
            "message": "Faculty account not found."
        }), 404

    if not check_password_hash(
        faculty["password"],
        password
    ):
        return jsonify({
            "status": "error",
            "message": "Incorrect password."
        }), 401

    return jsonify({
        "status": "success",
        "message": "Faculty login successful.",
        "faculty": {
            "faculty_id": faculty["id"],
            "name": faculty["name"],
            "email": faculty["email"],
            "department": faculty["department"],
            "institution": faculty["institution"]
        }
    }), 200
@app.route("/api/faculty/<int:faculty_id>", methods=["GET"])
def get_faculty(faculty_id):

    connection = get_connection()

    faculty = connection.execute(
        """
        SELECT id, name, email, department, institution
        FROM faculties
        WHERE id = ?
        """,
        (faculty_id,)
    ).fetchone()

    connection.close()

    if not faculty:
        return jsonify({
            "status": "error",
            "message": "Faculty not found."
        }), 404

    return jsonify({
        "status": "success",
        "faculty": {
            "faculty_id": faculty["id"],
            "name": faculty["name"],
            "email": faculty["email"],
            "department": faculty["department"],
            "institution": faculty["institution"]
        }
    }), 200
@app.route("/api/faculty/<int:faculty_id>/students", methods=["GET"])
def get_faculty_students(faculty_id):

    connection = get_connection()

    faculty = connection.execute(
        """
        SELECT id
        FROM faculties
        WHERE id = ?
        """,
        (faculty_id,)
    ).fetchone()

    if not faculty:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Faculty not found."
        }), 404

    students = connection.execute(
        """
        SELECT
            id,
            name,
            email,
            education,
            career_goal,
            skills
        FROM students
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    student_list = []

    for student in students:
        student_list.append({
            "student_id": student["id"],
            "name": student["name"],
            "email": student["email"],
            "education": student["education"],
            "career_goal": student["career_goal"],
            "skills": student["skills"]
        })

    return jsonify({
        "status": "success",
        "faculty_id": faculty_id,
        "total_students": len(student_list),
        "students": student_list
    }), 200


# =========================================================
# LOGIN
# =========================================================

@app.route("/api/login", methods=["POST"])
def login():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "status": "error",
            "message": "Email and password are required."
        }), 400

    connection = get_connection()

    user = connection.execute(
        """
        SELECT
            users.id AS user_id,
            users.student_id,
            users.email,
            users.password,
            students.name,
            students.education,
            students.career_goal,
            students.skills
        FROM users
        JOIN students
        ON users.student_id = students.id
        WHERE users.email = ?
        """,
        (email,)
    ).fetchone()

    connection.close()

    if not user:
        return jsonify({
            "status": "error",
            "message": "Invalid email or password."
        }), 401

    # Check hashed password
    if not check_password_hash(
        user["password"],
        password
    ):
        return jsonify({
            "status": "error",
            "message": "Invalid email or password."
        }), 401

    return jsonify({
        "status": "success",
        "message": "Login successful!",
        "student": {
            "student_id": user["student_id"],
            "name": user["name"],
            "email": user["email"],
            "education": user["education"],
            "career_goal": user["career_goal"],
            "skills": user["skills"]
        }
    })


# =========================================================
# UPDATE STUDENT
# =========================================================

@app.route("/api/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    name = data.get("name")
    email = data.get("email", "")
    education = data.get("education")
    career_goal = data.get("career_goal")
    skills = data.get("skills")

    if not name or not education or not career_goal or not skills:
        return jsonify({
            "status": "error",
            "message": "Name, education, career goal and skills are required."
        }), 400

    connection = get_connection()

    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    connection.execute(
        """
        UPDATE students
        SET name = ?,
            email = ?,
            education = ?,
            career_goal = ?,
            skills = ?
        WHERE id = ?
        """,
        (
            name,
            email,
            education,
            career_goal,
            skills,
            student_id
        )
    )

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Student updated successfully!"
    })


# =========================================================
# SKILL GAP ANALYSIS
# =========================================================

@app.route("/api/skill-gap/<int:student_id>", methods=["GET"])
def skill_gap_analysis(student_id):

    connection = get_connection()

    # Get student information
    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    # Student career goal
    career_goal = student["career_goal"].strip().lower()

    # Student current skills
    current_skills = [
        skill.strip().lower()
        for skill in student["skills"].split(",")
        if skill.strip()
    ]

    # Find career skills from dataset
    career_skill_rows = connection.execute(
        """
        SELECT
            skill,
            category,
            importance,
            skill_level,
            learning_topic,
            learning_priority
        FROM career_skills
        WHERE LOWER(career_role) = ?
        ORDER BY learning_priority ASC
        """,
        (career_goal,)
    ).fetchall()

    # Partial career matching
    if not career_skill_rows:

        career_skill_rows = connection.execute(
            """
            SELECT
                skill,
                category,
                importance,
                skill_level,
                learning_topic,
                learning_priority
            FROM career_skills
            WHERE LOWER(career_role) LIKE ?
            ORDER BY learning_priority ASC
            """,
            (f"%{career_goal}%",)
        ).fetchall()

    connection.close()

    # Career not found
    if not career_skill_rows:

        return jsonify({
            "status": "error",
            "message": "No career skill data found for this career goal.",
            "career_goal": student["career_goal"]
        }), 404

    # Required skills
    required_skills = [
        row["skill"].strip().lower()
        for row in career_skill_rows
    ]

    # Matched skills
    matched_skills = [
        skill
        for skill in required_skills
        if skill in current_skills
    ]

    # Missing skills
    missing_skills = [
        skill
        for skill in required_skills
        if skill not in current_skills
    ]

    # Match percentage
    total_skills = len(required_skills)

    if total_skills > 0:
        match_percentage = round(
            (len(matched_skills) / total_skills) * 100
        )
    else:
        match_percentage = 0

    # Detailed skill-gap information
    skill_details = []

    high_priority_skills = []
    medium_priority_skills = []

    for row in career_skill_rows:

        skill_name = row["skill"].strip().lower()

        if skill_name not in current_skills:

            skill_data = {
                "skill": row["skill"],
                "category": row["category"],
                "importance": row["importance"],
                "required_level": row["skill_level"],
                "learning_topic": row["learning_topic"],
                "learning_priority": row["learning_priority"]
            }

            skill_details.append(skill_data)

            # High priority
            if (
                row["importance"].strip().lower() == "high"
                or row["learning_priority"] <= 2
            ):
                high_priority_skills.append(skill_data)

            # Medium priority
            else:
                medium_priority_skills.append(skill_data)

    return jsonify({

        "status": "success",

        "student_id": student_id,

        "career_goal": student["career_goal"],

        "current_skills": current_skills,

        "required_skills": required_skills,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "match_percentage": match_percentage,

        "total_required_skills": total_skills,

        "total_matched_skills": len(matched_skills),

        "total_missing_skills": len(missing_skills),

        "high_priority_skills": high_priority_skills,

        "medium_priority_skills": medium_priority_skills,

        "skill_details": skill_details
    })

# =========================================================
# LEARNING PROGRESS - GET
# =========================================================

@app.route("/api/learning-progress/<int:student_id>", methods=["GET"])
def get_learning_progress(student_id):

    connection = get_connection()

    student = connection.execute(
        "SELECT id FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:

        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    progress = connection.execute(
        """
        SELECT completed_weeks
        FROM learning_progress
        WHERE student_id = ?
        """,
        (student_id,)
    ).fetchone()

    connection.close()

    if progress:

        import json

        completed_weeks = json.loads(
            progress["completed_weeks"]
        )

    else:

        completed_weeks = []

    return jsonify({

        "status": "success",

        "student_id": student_id,

        "completed_weeks": completed_weeks
    })


# =========================================================
# LEARNING PROGRESS - UPDATE
# =========================================================

@app.route("/api/learning-progress/<int:student_id>", methods=["PUT"])
def update_learning_progress(student_id):

    data = request.get_json()

    if not data:

        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    completed_weeks = data.get("completed_weeks")

    if not isinstance(completed_weeks, list):

        return jsonify({
            "status": "error",
            "message": "completed_weeks must be a list."
        }), 400

    connection = get_connection()

    student = connection.execute(
        "SELECT id FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:

        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    import json

    progress = connection.execute(
        """
        SELECT id
        FROM learning_progress
        WHERE student_id = ?
        """,
        (student_id,)
    ).fetchone()

    progress_json = json.dumps(completed_weeks)

    if progress:

        connection.execute(
            """
            UPDATE learning_progress
            SET completed_weeks = ?
            WHERE student_id = ?
            """,
            (
                progress_json,
                student_id
            )
        )

    else:

        connection.execute(
            """
            INSERT INTO learning_progress
            (student_id, completed_weeks)
            VALUES (?, ?)
            """,
            (
                student_id,
                progress_json
            )
        )

    connection.commit()
    connection.close()

    return jsonify({

        "status": "success",

        "message": "Learning progress saved successfully!",

        "student_id": student_id,

        "completed_weeks": completed_weeks
    })


# =========================================================
# GET ALL OPPORTUNITIES
# =========================================================

@app.route("/api/opportunities", methods=["GET"])
def get_opportunities():

    connection = get_connection()

    opportunities = connection.execute(
        """
        SELECT *
        FROM opportunities
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    opportunity_list = []

    for opportunity in opportunities:

        opportunity_data = dict(opportunity)

        opportunity_data["required_skills"] = [

            skill.strip().lower()

            for skill in opportunity_data[
                "required_skills"
            ].split(",")

            if skill.strip()
        ]

        opportunity_list.append(
            opportunity_data
        )

    return jsonify({

        "status": "success",

        "opportunities": opportunity_list
    })


# =========================================================
# SEED OPPORTUNITIES
# =========================================================

@app.route("/api/opportunities/seed", methods=["POST"])
def seed_opportunities():

    connection = get_connection()

    existing = connection.execute(
        "SELECT COUNT(*) AS count FROM opportunities"
    ).fetchone()

    if existing["count"] > 0:

        connection.close()

        return jsonify({
            "status": "success",
            "message": "Opportunities already exist in database."
        })

    opportunities = [

        (
            "Frontend Developer Intern",
            "Tech Startup",
            "Internship",
            "html,css,javascript,react",
            "Work on modern frontend applications and responsive user interfaces.",
            "Remote",
            ""
        ),

        (
            "AI / Python Intern",
            "AI Solutions",
            "Internship",
            "python,machine learning,numpy,pandas",
            "Work on Python and AI-based projects.",
            "Remote",
            ""
        ),

        (
            "Full Stack Developer Intern",
            "Web Technologies",
            "Internship",
            "html,css,javascript,react,node.js,sql",
            "Build frontend and backend features for web applications.",
            "Hybrid",
            ""
        ),

        (
            "Junior Web Developer",
            "Digital Labs",
            "Job",
            "html,css,javascript,react,git",
            "Develop and maintain modern web applications.",
            "On-site",
            ""
        ),

        (
            "Python Developer Intern",
            "Software Labs",
            "Internship",
            "python,sql,git",
            "Develop Python applications and work with databases.",
            "Remote",
            ""
        ),

        (
            "Data Science Intern",
            "Data Analytics Co.",
            "Internship",
            "python,sql,pandas,numpy,statistics",
            "Analyze datasets and create data-driven solutions.",
            "Hybrid",
            ""
        )
    ]

    connection.executemany(
        """
        INSERT INTO opportunities
        (
            title,
            company,
            opportunity_type,
            required_skills,
            description,
            location,
            application_link
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        opportunities
    )

    connection.commit()
    connection.close()

    return jsonify({

        "status": "success",

        "message": "Opportunities added successfully!",

        "count": len(opportunities)
    }), 201


# =========================================================
# PERSONALIZED OPPORTUNITIES
# =========================================================

@app.route("/api/opportunities/<int:student_id>", methods=["GET"])
def get_student_opportunities(student_id):

    connection = get_connection()

    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:

        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404
    

    opportunities = connection.execute(
        "SELECT * FROM opportunities ORDER BY id DESC"
    ).fetchall()

    connection.close()

    student_skills = [

        skill.strip().lower()

        for skill in student["skills"].split(",")

        if skill.strip()
    ]

    result = []

    for opportunity in opportunities:

        required_skills = [

            skill.strip().lower()

            for skill in opportunity[
                "required_skills"
            ].split(",")

            if skill.strip()
        ]

        matched_skills = [

            skill

            for skill in required_skills

            if skill in student_skills
        ]

        missing_skills = [

            skill

            for skill in required_skills

            if skill not in student_skills
        ]

        if required_skills:

            match_percentage = round(

                (
                    len(matched_skills)
                    /
                    len(required_skills)
                ) * 100
            )

        else:

            match_percentage = 0

        result.append({

            "id": opportunity["id"],

            "title": opportunity["title"],

            "company": opportunity["company"],

            "opportunity_type":
                opportunity["opportunity_type"],

            "required_skills":
                required_skills,

            "matched_skills":
                matched_skills,

            "missing_skills":
                missing_skills,

            "match_percentage":
                match_percentage,

            "description":
                opportunity["description"],

            "location":
                opportunity["location"],

            "application_link":
                opportunity["application_link"]
        })

    result.sort(
        key=lambda opportunity:
            opportunity["match_percentage"],
        reverse=True
    )

    return jsonify({

        "status": "success",

        "student_id": student_id,

        "opportunities": result
    })
# =========================================================
# FACULTY - MONITORING SUMMARY
# =========================================================

@app.route(
    "/api/faculty/<int:faculty_id>/monitoring-summary",
    methods=["GET"]
)
def get_faculty_monitoring_summary(faculty_id):

    connection = get_connection()

    faculty = connection.execute(
        """
        SELECT id, name, department, institution
        FROM faculties
        WHERE id = ?
        """,
        (faculty_id,)
    ).fetchone()

    if not faculty:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Faculty not found."
        }), 404

    students = connection.execute(
        """
        SELECT
            id,
            name,
            email,
            career_goal
        FROM students
        ORDER BY id DESC
        """
    ).fetchall()

    connection.close()

    total_students = len(students)

    students_with_analysis = 0
    total_match_percentage = 0

    for student in students:

        try:
            analysis_connection = get_connection()

            career_goal = student["career_goal"]

            required_skills = analysis_connection.execute(
                """
                SELECT skill
                FROM career_skills
                WHERE LOWER(career_role) = LOWER(?)
                """,
                (career_goal,)
            ).fetchall()

            analysis_connection.close()

            if required_skills:

                students_with_analysis += 1

                student_skills = []

                # Get student's current skills
                student_connection = get_connection()

                student_record = student_connection.execute(
                    """
                    SELECT skills
                    FROM students
                    WHERE id = ?
                    """,
                    (student["id"],)
                ).fetchone()

                student_connection.close()

                if student_record and student_record["skills"]:

                    student_skills = [
                        skill.strip().lower()
                        for skill in student_record["skills"].split(",")
                    ]

                required_skill_names = [
                    row["skill"].strip().lower()
                    for row in required_skills
                ]

                matched = [
                    skill
                    for skill in required_skill_names
                    if skill in student_skills
                ]

                if required_skill_names:
                    match_percentage = round(
                        (len(matched) / len(required_skill_names)) * 100
                    )
                else:
                    match_percentage = 0

                total_match_percentage += match_percentage

        except Exception as error:

            print(
                "Monitoring analysis error:",
                error
            )

    if students_with_analysis > 0:

        average_career_readiness = round(
            total_match_percentage / students_with_analysis
        )

    else:

        average_career_readiness = 0

    return jsonify({
        "status": "success",

        "faculty": {
            "faculty_id": faculty["id"],
            "name": faculty["name"],
            "department": faculty["department"],
            "institution": faculty["institution"]
        },

        "summary": {
            "total_students": total_students,
            "students_with_analysis": students_with_analysis,
            "average_career_readiness": average_career_readiness
        }
    }), 200

@app.route("/api/faculty/student/<int:student_id>/learning-progress", methods=["GET"])
def get_faculty_student_learning_progress(student_id):

    connection = get_connection()

    student = connection.execute(
        """
        SELECT id, name, career_goal
        FROM students
        WHERE id = ?
        """,
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    progress = connection.execute(
        """
        SELECT completed_weeks
        FROM learning_progress
        WHERE student_id = ?
        """,
        (student_id,)
    ).fetchone()

    connection.close()

    completed_weeks = []

    if progress:
        try:
            import json

            completed_weeks = json.loads(
                progress["completed_weeks"]
            )
        except Exception:
            completed_weeks = []

    return jsonify({
        "status": "success",
        "student": {
            "student_id": student["id"],
            "name": student["name"],
            "career_goal": student["career_goal"]
        },
        "completed_weeks": completed_weeks,
        "completed_count": len(completed_weeks)
    }), 200


# =========================================================
# START FLASK SERVER
# =========================================================
@app.route("/api/ai-career-advisor/<int:student_id>", methods=["GET"])
def ai_career_advisor(student_id):

    connection = get_connection()

    # -------------------------------------------------
    # 1. Get student information
    # -------------------------------------------------

    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()
        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    career_goal = student["career_goal"].strip()

    current_skills = [
        skill.strip().lower()
        for skill in student["skills"].split(",")
        if skill.strip()
    ]

    # -------------------------------------------------
    # 2. Get career requirements from SkillNexus dataset
    # -------------------------------------------------

    rows = connection.execute(
        """
        SELECT
            skill,
            category,
            importance,
            skill_level,
            learning_topic,
            learning_priority
        FROM career_skills
        WHERE LOWER(career_role) = LOWER(?)
        ORDER BY learning_priority ASC
        """,
        (career_goal,)
    ).fetchall()

    connection.close()

    if not rows:
        return jsonify({
            "status": "error",
            "message": "No career information found for this career goal."
        }), 404

    # -------------------------------------------------
    # 3. Calculate skill alignment
    # -------------------------------------------------

    required_skills = [
        row["skill"].strip().lower()
        for row in rows
    ]

    matched_skills = [
        skill
        for skill in required_skills
        if skill in current_skills
    ]

    missing_skills = [
        skill
        for skill in required_skills
        if skill not in current_skills
    ]

    total_skills = len(required_skills)

    match_percentage = (
        round((len(matched_skills) / total_skills) * 100)
        if total_skills > 0
        else 0
    )

    # -------------------------------------------------
    # 4. Analyze missing skills
    # -------------------------------------------------

    high_priority = []
    medium_priority = []
    low_priority = []

    next_steps = []

    for row in rows:

        skill_name = row["skill"].strip().lower()

        if skill_name not in current_skills:

            skill_data = {
                "skill": row["skill"],
                "learning_topic": row["learning_topic"],
                "category": row["category"],
                "importance": row["importance"],
                "skill_level": row["skill_level"],
                "learning_priority": row["learning_priority"]
            }

            next_steps.append(skill_data)

            priority = str(row["learning_priority"]).strip().lower()

            if priority == "high":
                high_priority.append(skill_data)

            elif priority == "medium":
                medium_priority.append(skill_data)

            else:
                low_priority.append(skill_data)

    # -------------------------------------------------
    # 5. Determine readiness level
    # -------------------------------------------------

    if match_percentage >= 80:
        readiness_level = "Strong Foundation"

    elif match_percentage >= 60:
        readiness_level = "Good Progress"

    elif match_percentage >= 40:
        readiness_level = "Developing"

    else:
        readiness_level = "Early Stage"

    # -------------------------------------------------
    # 6. Generate personalized career insight
    # -------------------------------------------------

    if match_percentage >= 80:

        career_insight = (
            f"Your current skill profile is well aligned with "
            f"the {career_goal} career path. Your next focus should "
            f"be strengthening advanced skills and building practical "
            f"projects that demonstrate your abilities."
        )

    elif match_percentage >= 60:

        career_insight = (
            f"You already have a solid foundation for {career_goal}. "
            f"Focus on the remaining high-priority skills and apply "
            f"them through practical projects to improve your career readiness."
        )

    elif match_percentage >= 40:

        career_insight = (
            f"You are developing the foundation required for {career_goal}. "
            f"Prioritize the high-priority missing skills first, then "
            f"gradually build projects to strengthen your profile."
        )

    else:

        career_insight = (
            f"You are at an early stage of your {career_goal} journey. "
            f"Start with the highest-priority foundational skills and "
            f"follow the recommended learning path step by step."
        )

    # -------------------------------------------------
    # 7. Identify the best next action
    # -------------------------------------------------

    first_action = None

    if high_priority:

        first = high_priority[0]

        first_action = {
            "skill": first["skill"],
            "learning_topic": first["learning_topic"],
            "category": first["category"],
            "importance": first["importance"],
            "skill_level": first["skill_level"],
            "reason": (
                "This skill has high learning priority in your "
                "career roadmap and is currently missing from your profile."
            )
        }

    elif medium_priority:

        first = medium_priority[0]

        first_action = {
            "skill": first["skill"],
            "learning_topic": first["learning_topic"],
            "category": first["category"],
            "importance": first["importance"],
            "skill_level": first["skill_level"],
            "reason": (
                "This is an important next skill identified from "
                "your career roadmap."
            )
        }

    elif low_priority:

        first = low_priority[0]

        first_action = {
            "skill": first["skill"],
            "learning_topic": first["learning_topic"],
            "category": first["category"],
            "importance": first["importance"],
            "skill_level": first["skill_level"],
            "reason": (
                "This skill can strengthen your profile after "
                "the higher-priority skills are completed."
            )
        }

    # -------------------------------------------------
    # 8. Create a personalized learning strategy
    # -------------------------------------------------

    learning_strategy = []

    if high_priority:
        learning_strategy.append(
            "Complete the high-priority skill gaps first."
        )

    if medium_priority:
        learning_strategy.append(
            "Build intermediate skills after completing the foundation."
        )

    if low_priority:
        learning_strategy.append(
            "Use lower-priority skills to strengthen your overall profile."
        )

    learning_strategy.append(
        "Build practical projects to demonstrate the skills you learn."
    )

    # -------------------------------------------------
    # 9. Generate profile summary
    # -------------------------------------------------

    profile_summary = (
        f"You currently match {match_percentage}% of the skills "
        f"identified for {career_goal}. "
        f"You have {len(matched_skills)} matched skills and "
        f"{len(missing_skills)} remaining skill gaps."
    )

    # -------------------------------------------------
    # 10. Return AI Career Advisor response
    # -------------------------------------------------

    return jsonify({
        "status": "success",

        "student_id": student_id,

        "career_goal": career_goal,

        "current_skills": current_skills,

        "required_skills": required_skills,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "match_percentage": match_percentage,

        "readiness_level": readiness_level,

        "profile_summary": profile_summary,

        "career_insight": career_insight,

        "first_action": first_action,

        "next_steps": next_steps,

        "priority_breakdown": {
            "high": high_priority,
            "medium": medium_priority,
            "low": low_priority
        },

        "learning_strategy": learning_strategy
    })
# =====================================================
# SMART CAREER RECOMMENDATIONS
# =====================================================

@app.route("/api/career-recommendations/<int:student_id>", methods=["GET"])
def career_recommendations(student_id):

    connection = get_connection()

    # Get student
    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    # Convert student's skills into a clean list
    current_skills = [
        skill.strip().lower()
        for skill in student["skills"].split(",")
        if skill.strip()
    ]

    # Get all career-skill data
    rows = connection.execute("""
        SELECT
            career_role,
            skill,
            category,
            importance,
            skill_level,
            learning_topic,
            learning_priority
        FROM career_skills
        ORDER BY career_role, learning_priority ASC
    """).fetchall()

    connection.close()

    if not rows:

        return jsonify({
            "status": "error",
            "message": "Career skill dataset is empty."
        }), 404

    # Group skills career-wise
    careers = {}

    for row in rows:

        career_name = row["career_role"]

        if career_name not in careers:
            careers[career_name] = []

        careers[career_name].append({
            "skill": row["skill"],
            "category": row["category"],
            "importance": row["importance"],
            "skill_level": row["skill_level"],
            "learning_topic": row["learning_topic"],
            "learning_priority": row["learning_priority"]
        })

    recommendations = []

    # Compare student's skills with every career
    for career_name, career_skills in careers.items():

        required_skills = [
            item["skill"].strip().lower()
            for item in career_skills
        ]

        matched_skills = [
            skill
            for skill in required_skills
            if skill in current_skills
        ]

        missing_skills = [
            skill
            for skill in required_skills
            if skill not in current_skills
        ]

        total_required = len(required_skills)

        if total_required > 0:
            match_percentage = round(
                (len(matched_skills) / total_required) * 100
            )
        else:
            match_percentage = 0

        recommendations.append({
            "career": career_name,
            "match_percentage": match_percentage,
            "matched_skills": matched_skills,
            "missing_skills": missing_skills,
            "required_skills": required_skills,
            "total_required_skills": total_required,
            "matched_count": len(matched_skills),
            "missing_count": len(missing_skills)
        })

    # Highest matching careers first
    recommendations.sort(
        key=lambda career: career["match_percentage"],
        reverse=True
    )

    return jsonify({
        "status": "success",
        "student_id": student_id,
        "current_skills": current_skills,
        "recommendations": recommendations
    })
# =====================================================
# INTELLIGENT LEARNING RECOMMENDATIONS
# =====================================================

@app.route("/api/learning-recommendations/<int:student_id>", methods=["GET"])
def learning_recommendations(student_id):

    connection = get_connection()

    # -------------------------------------------------
    # Get student
    # -------------------------------------------------

    student = connection.execute(
        "SELECT * FROM students WHERE id = ?",
        (student_id,)
    ).fetchone()

    if not student:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Student not found."
        }), 404

    career_goal = student["career_goal"].strip()

    current_skills = [
        skill.strip().lower()
        for skill in student["skills"].split(",")
        if skill.strip()
    ]

    # -------------------------------------------------
    # Get career skill data from database
    # -------------------------------------------------

    rows = connection.execute(
        """
        SELECT
            skill,
            category,
            importance,
            skill_level,
            learning_topic,
            learning_priority
        FROM career_skills
        WHERE LOWER(career_role) = LOWER(?)
        ORDER BY learning_priority ASC
        """,
        (career_goal,)
    ).fetchall()

    connection.close()

    # -------------------------------------------------
    # If exact career is not found
    # -------------------------------------------------

    if not rows:

        connection = get_connection()

        rows = connection.execute(
            """
            SELECT
                skill,
                category,
                importance,
                skill_level,
                learning_topic,
                learning_priority
            FROM career_skills
            WHERE LOWER(career_role) LIKE LOWER(?)
            ORDER BY learning_priority ASC
            """,
            (f"%{career_goal}%",)
        ).fetchall()

        connection.close()

    if not rows:

        return jsonify({
            "status": "error",
            "message": "No learning data found for this career.",
            "career_goal": career_goal
        }), 404

    # -------------------------------------------------
    # Create personalized learning recommendations
    # -------------------------------------------------

    learning_recommendations = []

    for row in rows:

        skill_name = row["skill"].strip().lower()

        # Only recommend skills the student does not have
        if skill_name not in current_skills:

            learning_recommendations.append({
                "skill": row["skill"],
                "category": row["category"],
                "importance": row["importance"],
                "skill_level": row["skill_level"],
                "learning_topic": row["learning_topic"],
                "learning_priority": row["learning_priority"]
            })

    # -------------------------------------------------
    # Return personalized roadmap
    # -------------------------------------------------

    return jsonify({
        "status": "success",
        "student_id": student_id,
        "career_goal": student["career_goal"],
        "current_skills": current_skills,
        "total_learning_recommendations": len(
            learning_recommendations
        ),
        "learning_recommendations": learning_recommendations
    })
# =====================================================
# RESET TEST STUDENT DATA
# =====================================================

@app.route("/api/reset-student-data", methods=["DELETE"])
def reset_student_data():

    connection = get_connection()

    try:
        # Delete login accounts
        connection.execute("DELETE FROM users")

        # Delete learning progress
        connection.execute("DELETE FROM learning_progress")

        # Delete student profiles
        connection.execute("DELETE FROM students")

        connection.commit()

        return jsonify({
            "status": "success",
            "message": "All student test data has been reset successfully."
        })

    except Exception as error:

        connection.rollback()

        return jsonify({
            "status": "error",
            "message": str(error)
        }), 500

    finally:

        connection.close()
        # =========================================================
# INDUSTRY - POST OPPORTUNITY
# =========================================================

@app.route("/api/industry/opportunities", methods=["POST"])
def industry_post_opportunity():

    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No data received."
        }), 400

    industry_id = data.get("industry_id")
    title = data.get("title", "").strip()
    opportunity_type = data.get("opportunity_type", "").strip()
    required_skills = data.get("required_skills", "").strip()
    description = data.get("description", "").strip()
    location = data.get("location", "").strip()
    application_link = data.get("application_link", "").strip()

    # Temporary check
    print("APPLICATION LINK RECEIVED:", application_link)

    if not industry_id:
        return jsonify({
            "status": "error",
            "message": "Industry ID is required."
        }), 400

    if not title or not opportunity_type or not required_skills:
        return jsonify({
            "status": "error",
            "message": (
                "Title, opportunity type and required skills "
                "are required."
            )
        }), 400

    connection = get_connection()

    industry = connection.execute(
        """
        SELECT id, company_name
        FROM industries
        WHERE id = ?
        """,
        (industry_id,)
    ).fetchone()

    if not industry:
        connection.close()
        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    cursor = connection.execute(
        """
        INSERT INTO opportunities
        (
            industry_id,
            title,
            company,
            opportunity_type,
            required_skills,
            description,
            location,
            application_link
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            industry_id,
            title,
            industry["company_name"],
            opportunity_type,
            required_skills,
            description,
            location,
            application_link
        )
    )

    opportunity_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return jsonify({
        "status": "success",
        "message": "Opportunity posted successfully.",
        "opportunity": {
            "id": opportunity_id,
            "industry_id": industry_id,
            "title": title,
            "company": industry["company_name"],
            "opportunity_type": opportunity_type,
            "required_skills": required_skills,
            "description": description,
            "location": location,
            "application_link": application_link
        }
    }), 201
@app.route("/api/industry/opportunities/<int:industry_id>", methods=["GET"])
def get_industry_opportunities(industry_id):

    connection = get_connection()

    # Check whether the industry account exists
    industry = connection.execute(
        "SELECT id FROM industries WHERE id = ?",
        (industry_id,)
    ).fetchone()

    if not industry:
        connection.close()

        return jsonify({
            "status": "error",
            "message": "Industry account not found."
        }), 404

    # Fetch opportunities posted by this industry
    opportunities = connection.execute(
        """
        SELECT
            id,
            industry_id,
            title,
            company,
            opportunity_type,
            required_skills,
            description,
            location,
            application_link
        FROM opportunities
        WHERE industry_id = ?
        ORDER BY id DESC
        """,
        (industry_id,)
    ).fetchall()

    connection.close()

    return jsonify({
        "status": "success",
        "opportunities": [dict(row) for row in opportunities]
    }), 200

if __name__ == "__main__":
    app.run(debug=True)

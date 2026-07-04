from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import get_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to ApplyFlow API"
    }


@app.get("/applications")
def get_applications():
    conn = get_connection()

    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT
            id,
            company,
            role,
            status
        FROM applications
        """
    )

    applications = cursor.fetchall()

    cursor.close()
    conn.close()

    return applications


@app.post("/applications")
def create_application(application: dict):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO applications
        (company, role, status)
        VALUES (%s, %s, %s)
        """,
        (
            application["company"],
            application["role"],
            application["status"]
        )
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Application created successfully"
    }   
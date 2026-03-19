from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)
conn = sqlite3.connect('recipes.db', check_same_thread=False)
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    image TEXT
)
''')
conn.commit()

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_recipe():
    name = request.form.get('name')
    description = request.form.get('description')
    file = request.files.get('image')

    filename = file.filename
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    cursor.execute(
        "INSERT INTO recipes (name, description, image) VALUES (?, ?, ?)",
        (name, description, filename)
    )
    conn.commit()

    return jsonify({'message': 'Recipe uploaded successfully'})


@app.route('/recipes', methods=['GET'])
def get_recipes():
    cursor.execute("SELECT name, description, image FROM recipes")
    data = cursor.fetchall()

    recipes = []
    for row in data:
        recipes.append({
            'name': row[0],
            'description': row[1],
            'image': row[2]
        })

    return jsonify(recipes)


@app.route('/uploads/<filename>')
def get_image(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/')
def home():
    return "Recipe API is running..."


if __name__ == '__main__':
    app.run(debug=True)
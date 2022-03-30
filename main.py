from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
@app.route('/main')
def main_page():
    return render_template('index.html', title='Tooba')


@app.route('/map')
def map_page():
    return render_template('map.html', title='Map')


@app.route('/leaderboard')
def leaderboard_page():
    return render_template('leaderboard.html', title='Leaderboard')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)

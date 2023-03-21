import config
import snake

from flask import Flask, request, json
app = Flask(__name__)

@app.route(f'/snake/{config.ID}/')
def index():
    return snake.index()
  
@app.route(f'/snake/{config.ID}/init', methods = ['GET', 'POST'])
def init():
    return snake.init(json.loads(json.dumps(request.json))), 200

@app.route(f'/snake/{config.ID}/move', methods = ['GET', 'POST'])
def move():    
    return snake.move(json.loads(json.dumps(request.json)))

@app.errorhandler(404)
def error(e):
    return 'Not found', 404

if __name__ == '__main__':
    app.run(host = config.IP, port = config.PORT)

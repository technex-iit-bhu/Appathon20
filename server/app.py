import os
from flask import Flask, g, request, jsonify
from sqlalchemy import text
from flask_sqlalchemy import SQLAlchemy

# It'll write to "postgresql-amorphous-96837" on Heroku and locally to database.db file
DATABASE_URL = os.environ.get('DATABASE_URL', 'postgresql://postgres:psuserpassword@localhost/myDB')
app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
db = SQLAlchemy(app)


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None: db.close()


@app.cli.command('initdb')
def init_db():
    with app.app_context():
        with app.open_resource('schema.sql', mode='r') as f:
            db.engine.execute(text(f.read()).execution_options(autocommit=True))
    print('Initialized the database.')


@app.route('/', methods=['GET'])
def index():
    return jsonify(status="200", response="Hello World")


@app.route('/delete_entries', methods=['POST'])
def deleteEntries():
    if request.json[
        'key'] != '586E3272357538782F4125442A472D4B6150645367566B59703373367639792442264528482B4D6251655468576D5A7134743777217A25432A462D4A404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970337336763979244226452948404D6351665468576D5A7134743777217A25432A462D4A614E645267556B586E3272357538782F413F4428472B4B6250655368566D5971337336763979244226452948404D635166546A576E5A7234753777217A25432A462D4A614E645267556B58703273357638792F413F4428472B4B6250655368566D597133743677397A244326452948404D635166546A576E5A7234753778214125442A472D4A614E645267556B58703273357638792F423F4528482B4D6250655368566D597133743677397A24432646294A404E635266546A576E5A7234753778214125442A472D4B6150645367566B58703273357638792F423F4528482B4D6251655468576D5A7133743677397A24432646294A404E635266556A586E327235753778214125442A472D4B6150645367566B59703373367639792F423F4528482B4D6251655468576D5A7134743777217A25432646294A404E635266556A586E3272357538782F413F4428472D4B6150645367566B5970337336763979244226452948404D6251655468576D5A7134743777217A25432A462D4A614E64526655':
        return jsonify(
            status="500",
            response="Access Denied"
        )

    sql = request.json['sql']

    try:
        db.engine.execute(sql)
        return jsonify(
            status="200"
        )

    except Exception as e:
        return jsonify(
            status="500",
            response=str(e)
        )


@app.route('/listAllUsers', methods=['GET'])
def listAllUsers():
    try:
        sql = "SELECT * FROM users;"
        res = db.engine.execute(sql).fetchall()
        if len(res) >= 1:
            return jsonify(
                status=200,
                response=[dict(zip(row.keys(), row)) for row in res]
            )
        else:
            return jsonify(
                status=500,
                response="No users exist"
            )
    except Exception as e:
        return jsonify(
            status="500",
            response=str(e)
        )


@app.route('/listAllItems', methods=['GET'])
def listAllItems():
    try:
        sql = "SELECT * FROM items;"
        res = db.engine.execute(sql).fetchall()
        if len(res) >= 1:
            return jsonify(
                response=[dict(zip(row.keys(), row)) for row in res]
            )
        else:
            return jsonify(
                status=500,
                response="No items exist"
            )
    except Exception as e:
        return jsonify(
            status="500",
            response=str(e)
        )


@app.route('/createUser', methods=['POST'])
def createUser():
    name = request.json['name']
    uuid = request.json['uuid']
    try:
        # create an item
        sql = "INSERT INTO users (name, uuid) VALUES ('%s','%s')" % \
              (name, uuid)
        db.engine.execute(text(sql).execution_options(autocommit=True))
    except Exception as e:
        return jsonify(
            status="500",
            response=str(e)
        )
    return jsonify(
        status=200,
        response="user created"
    )


@app.route('/createItem', methods=['POST'])
def createItem():
    name = request.json['name']
    description = request.json['description']
    url = request.json['url']
    price = request.json['price']
    try:
        # create an item
        sql = "INSERT INTO items (name, description, url, price) VALUES ('%s','%s','%s','%s')" % \
              (name, description, url, price)
        db.engine.execute(text(sql).execution_options(autocommit=True))
    except Exception as e:
        return jsonify(
            status="500",
            response=str(e)
        )
    return jsonify(
        status=200,
        response="item added"
    )


'''
def sendFcmNotif(fcmData, fcmTokens):
    try:
        url = "https://fcm.googleapis.com/fcm/send"
        serverkey = "key=AAAAAlxIlFw:APA91bGwrpL7LCCk7Ylw88i8H_weWreWwhlPeDbggPzA4eXTSNQJYscvcYabbvoP0J1ZBIrhAOeskYH2qQYQQql5GenbJslIzFAkQqK1ZYdBrRZZ1dmrPjC-MfmQMhLd9d3otp4Xvlv2"

        body = {
            "registration_ids": [ token for token in fcmTokens ],
            "data": fcmData
        }

        headers = {
            "Content-Type": "application/json",
            "Authorization": serverkey
        }

        response = requests.post(url, json=body, headers=headers)

    except Exception as e:
        return 500, e
    
    return 200,response.json()
'''

if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

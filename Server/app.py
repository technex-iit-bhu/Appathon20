from flask import Flask, jsonify, request
from pyfcm import FCMNotification

app = Flask(__name__)
push_service = FCMNotification(api_key="AIzaSyBYIkk2m1dkS2eP-XOH0xm0oIyL3b3FMtM")
id = ''


@app.route('/')
def index():
    json_data = {'Hello': 'World!'}
    return jsonify(json_data)


@app.route('/update_token',methods=['POST'])
def update_token():
    global id
    data = request.get_json()
    try:
        id = data['fcm_token']
        print(id)
        return jsonify({'status':200})
    except:
        return jsonify({'status': 400})


@app.route('/send_notif',methods=['POST'])
def send_notif():
    global id
    registration_id = id
    print(id)
    message_title = "Patient Needs help"
    message_body = "Hi nurse, your patient needs help"
    try:
        push_service.notify_single_device(registration_id=registration_id, message_title=message_title,
                                               message_body=message_body)
        return jsonify({'status':200})
    except:
        return jsonify({'status': 400})


if __name__ == '__main__':
    app.run()

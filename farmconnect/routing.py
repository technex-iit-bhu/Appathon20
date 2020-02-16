from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import chat.urls


APP = ProtocolTypeRouter({
    # HTTP -> Django views by Default
    'websocket': AuthMiddlewareStack(
        URLRouter(
            chat.urls.websocket_urlpatterns
        )
    ),
})

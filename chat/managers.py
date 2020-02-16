from django.db.models import QuerySet, Q


class FarmerChatQuerySet(QuerySet):
    def find_for_user(self, user):
        try:
            farmer = user.farmer
            return self.filter(
                Q(farmer1=farmer) | Q(farmer2=farmer)
            )
        except Exception:
            return self.none()


class ExpertChatQuerySet(QuerySet):
    def find_for_user(self, user):
        try:
            farmer = user.farmer
            return self.filter(farmer=farmer)
        except Exception:
            expert = user.expert
            return self.filter(expert=expert)

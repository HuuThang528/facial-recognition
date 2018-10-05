import graphene # pylint: disable=import-error

class Queries(
    graphene.ObjectType
):
    dummy = graphene.String()


schema = graphene.Schema(query=Queries)
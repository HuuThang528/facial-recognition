import leads.schema
import graphene # pylint: disable=import-error

from graphene_django.debug import DjangoDebug # pylint: disable=import-error

class Query(leads.schema.Queries,
            graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)

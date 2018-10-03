import leads.schema
import graphene

from graphene_django.debug import DjangoDebug


class Query(leads.schema.Queries,
            graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)

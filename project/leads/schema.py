import graphene # pylint: disable=import-error
from graphene_django.types import DjangoObjectType
from . import models
from graphql_relay.node.node import from_global_id
import json

class LeadType(DjangoObjectType):
    class Meta:
        model = models.Lead
        interfaces = (graphene.Node, )

# Query
class Queries(graphene.ObjectType):
    name = graphene.String()
    email = graphene.String()
    message = graphene.String()

    all_leads = graphene.List(LeadType)
    lead = graphene.Field(LeadType, id=graphene.ID())

    def resolve_all_leads(self, args):
        return models.Lead.objects.all()

    def resolve_lead(self, args, id):
        rid = from_global_id(id)
        return models.Lead.objects.get(pk=rid[1])

    def resolve_name(self, info):
        return self.name

    def resolve_email(self, info):
        return self.email

    def resolve_message(self, info):
        return self.message


# Mutation
class CreateLeadMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        email = graphene.String(required=True)
        message = graphene.String(required=True)
    status = graphene.Int()
    lead = graphene.Field(LeadType)
    def mutate(self, info, name, email, message):
        obj = models.Lead.objects.create(
            name=name, email=email, message=message
        )
        return CreateLeadMutation(status=200, lead=obj)


class Mutations(graphene.ObjectType):
    create_lead = CreateLeadMutation.Field()

schema = graphene.Schema(query=Queries, mutation=Mutations)
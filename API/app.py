import flask
from flask import Flask, jsonify, request, url_for, redirect, render_template
from sqlalchemy import Table, Date, ForeignKey, MetaData, Integer, Column, String
from flask_sqlalchemy import SQLAlchemy
from flask_restplus import Api, Resource, fields
from flask_cors import CORS

flask_app = flask.Flask(__name__)
app = Api(app = flask_app)
CORS(flask_app)

flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
flask_app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:dragoncross9@localhost:5432/imobiliariaEnforce'
flask_app.debug = True

name_space = app.namespace('api', description='Main APIs')

db = SQLAlchemy(flask_app)

from .classes.Owner import owner
from .classes.AddressImmobile import adress_immobile
from .classes.AddressClient import adress_client
from .classes.Client import client
from .classes.Seller import seller
from .classes.Banks import banks
from .classes.Financing import finance
from .classes.PaymentType import payment_type
from .classes.Payment import payment
from .classes.ImmobileType import immobile_type
from .classes.Immobile import immobile

from .models.models import modelOwner, modelAdressImmobile, modelAdressClient, modelBanco, modelFinancing, modelSeller, modelClient, modelPayment, modelPaymentType, modelImmobileType, modelImmobile

@name_space.route('/owners')
class gpOwners(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allOwners = owner.query.all()
            output = []
            for owners in allOwners:
                currOwner = {}
                currOwner['id_owner'] = owners.id_owner
                currOwner['name_owner'] = owners.name_owner
                currOwner['rg_owner'] = owners.rg_owner
                currOwner['cpf_owner'] = owners.cpf_owner
                currOwner['birth_date_owner'] = owners.birth_date_owner
                currOwner['civil_status_owner'] = owners.civil_status_owner
                currOwner['email_owner'] = owners.email_owner
                currOwner['cel_owner'] = owners.cel_owner
                currOwner['prof_owner'] = owners.prof_owner
                currOwner['tempo_prop'] = owners.tempo_prop
                output.append(currOwner)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelOwner)

    def post(self):

        try:
            ownersData = request.get_json()
            owners = owner(id_owner=ownersData['id_owner'], 
                        name_owner=ownersData['name_owner'], 
                        rg_owner=ownersData['rg_owner'], 
                        cpf_owner=ownersData['cpf_owner'], 
                        birth_date_owner=ownersData['birth_date_owner'], 
                        civil_status_owner=ownersData['civil_status_owner'], 
                        email_owner=ownersData['email_owner'], 
                        cel_owner=ownersData['cel_owner'], 
                        prof_owner=ownersData['prof_owner'], 
                        tempo_prop=ownersData['tempo_prop'])
            
            db.session.add(owners)
            db.session.commit()

            return jsonify(ownersData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/adress_immobile')
class gpAdressImmobile(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allAdressesImmobile = adress_immobile.query.all()
            output = []
            for adressesImmobile in allAdressesImmobile:
                currAdressImmobile = {}
                currAdressImmobile['id_endereco_imov'] = adressesImmobile.id_endereco_imov
                currAdressImmobile['rua_imov'] = adressesImmobile.rua_imov
                currAdressImmobile['numero_imov'] = adressesImmobile.numero_imov
                currAdressImmobile['apto_imov'] = adressesImmobile.apto_imov
                currAdressImmobile['bloco_imov'] = adressesImmobile.bloco_imov
                currAdressImmobile['bairro_imov'] = adressesImmobile.bairro_imov
                currAdressImmobile['cep_imov'] = adressesImmobile.cep_imov
                currAdressImmobile['cidade_imov'] = adressesImmobile.cidade_imov
                currAdressImmobile['uf_imov'] = adressesImmobile.uf_imov
                output.append(currAdressImmobile)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelAdressImmobile)

    def post(self):

        try:
            adressImmobileData = request.get_json()
            adressesImmobiles = adress_immobile(id_endereco_imov=adressImmobileData['id_endereco_imov'], 
                                                rua_imov=adressImmobileData['rua_imov'], 
                                                numero_imov=adressImmobileData['numero_imov'], 
                                                apto_imov=adressImmobileData['apto_imov'], 
                                                bloco_imov=adressImmobileData['bloco_imov'], 
                                                bairro_imov=adressImmobileData['bairro_imov'], 
                                                cep_imov=adressImmobileData['cep_imov'], 
                                                cidade_imov=adressImmobileData['cidade_imov'], 
                                                uf_imov=adressImmobileData['uf_imov'])
            db.session.add(adressesImmobiles)
            db.session.commit()

            return jsonify(adressImmobileData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/adress_client')
class gpAdressClient(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allAdressesClient = adress_client.query.all()
            output = []
            for adressClient in allAdressesClient:
                currAdressClient = {}
                currAdressClient['id_endereco_cli'] = adressClient.id_endereco_cli
                currAdressClient['rua_cli'] = adressClient.rua_cli
                currAdressClient['numero_cli'] = adressClient.numero_cli
                currAdressClient['apto_cli'] = adressClient.apto_cli
                currAdressClient['bloco_cli'] = adressClient.bloco_cli
                currAdressClient['bairro_cli'] = adressClient.bairro_cli
                currAdressClient['cep_cli'] = adressClient.cep_cli
                currAdressClient['cidade_cli'] = adressClient.cidade_cli
                currAdressClient['uf_cli'] = adressClient.uf_cli
                output.append(currAdressClient)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelAdressClient)

    def post(self):

        try:
            addressClientData = request.get_json()
            addressesClients = adress_client(id_endereco_cli=addressClientData['id_endereco_cli'], 
                                                rua_cli=addressClientData['rua_cli'], 
                                                numero_cli=addressClientData['numero_cli'], 
                                                apto_cli=addressClientData['apto_cli'], 
                                                bloco_cli=addressClientData['bloco_cli'], 
                                                bairro_cli=addressClientData['bairro_cli'], 
                                                cep_cli=addressClientData['cep_cli'], 
                                                cidade_cli=addressClientData['cidade_cli'], 
                                                uf_cli=addressClientData['uf_cli'])
            db.session.add(addressesClients)
            db.session.commit()

            return jsonify(addressClientData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/clients')
class gpClient(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allClients = client.query.all()
            output = []
            for clients in allClients:
                currClient = {}
                currClient['id_cli'] = clients.id_cli
                currClient['name_cli'] = clients.name_cli
                currClient['rg_cli'] = clients.rg_cli
                currClient['cpf_cli'] = clients.cpf_cli
                currClient['birth_date_cli'] = clients.birth_date_cli
                currClient['civil_status_cli'] = clients.civil_status_cli
                currClient['email_cli'] = clients.email_cli
                currClient['cel_cli'] = clients.cel_cli
                currClient['id_endereco_cli'] = clients.id_endereco_cli
                currClient['prof_cli'] = clients.prof_cli
                output.append(currClient)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelClient)

    def post(self):

        try:
            clientsData = request.get_json()
            clients = client(id_cli=clientsData['id_cli'], 
                        name_cli=clientsData['name_cli'], 
                        rg_cli=clientsData['rg_cli'], 
                        cpf_cli=clientsData['cpf_cli'], 
                        birth_date_cli=clientsData['birth_date_cli'], 
                        civil_status_cli=clientsData['civil_status_cli'], 
                        email_cli=clientsData['email_cli'], 
                        cel_cli=clientsData['cel_cli'], 
                        id_endereco_cli=clientsData['id_endereco_cli'], 
                        prof_cli=clientsData['prof_cli'])
            db.session.add(clients)
            db.session.commit()

            return jsonify(clientsData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/sellers')
class gpSellers(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allSellers = seller.query.all()
            output = []
            for sellers in allSellers:
                currSeller = {}
                currSeller['id_vendedor'] = sellers.id_vendedor
                currSeller['name_vendedor'] = sellers.name_vendedor
                currSeller['matricula_vendedor'] = sellers.matricula_vendedor
                currSeller['email_vendedor'] = sellers.email_vendedor
                currSeller['telefone_vendedor'] = sellers.telefone_vendedor
                output.append(currSeller)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelSeller)

    def post(self):

        try:
            sellersData = request.get_json()
            sellers = seller(id_vendedor=sellersData['id_vendedor'], 
                            name_vendedor=sellersData['name_vendedor'], 
                            matricula_vendedor=sellersData['matricula_vendedor'], 
                            email_vendedor=sellersData['email_vendedor'], 
                            telefone_vendedor=sellersData['telefone_vendedor'])
            db.session.add(sellers)
            db.session.commit()

            return jsonify(sellersData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/bancos')
class gpBanks(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allBanks = banks.query.all()
            output = []
            for bank in allBanks:
                currBank = {}
                currBank['id_banco'] = bank.id_banco
                currBank['name_banco'] = bank.name_banco
                output.append(currBank)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelBanco)

    def post(self):

        try:
            banksData = request.get_json()
            bank = banks(id_banco=banksData['id_banco'], 
                         name_banco=banksData['name_banco'])
            
            # table = modelBanco.__table__
            # columns = table.columns

            # with self.db.connect() as conn:
            #     insert_statement = self.table.insert().returning(self.table.id).values(id_banco=id_banco, name_banco=name_banco)
            #     result = conn.execute(insert_statement)
            #     return jsonify({'result': [dict(row) for row in result]})
            
            db.session.add(bank)
            db.session.commit()
        
            return jsonify(banksData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/financing')
class gpFinancing(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allFinancing = finance.query.all()
            output = []
            for financesList in allFinancing:
                currFinance = {}
                currFinance['id_financiamento'] = financesList.id_financiamento
                currFinance['id_cli'] = financesList.id_cli
                currFinance['id_banco'] = financesList.id_banco
                currFinance['entrada'] = financesList.entrada
                currFinance['num_parcela'] = financesList.num_parcela
                output.append(currFinance)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelFinancing)

    def post(self):

        try:
            financingData = request.get_json()
            finances = finance(id_financiamento=financingData['id_financiamento'], 
                               id_cli=financingData['id_cli'],
                               id_banco=financingData['id_banco'],
                               entrada=financingData['entrada'],
                               num_parcela=financingData['num_parcela'])
            db.session.add(finances)
            db.session.commit()
        
            return jsonify(financingData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400") 

@name_space.route('/paymentType')
class gpPaymentType(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allPaymentType = payment_type.query.all()
            output = []
            for paymentType in allPaymentType:
                currPaymentType = {}
                currPaymentType['id_tipo_compra'] = paymentTypeList.id_tipo_compra
                currPaymentType['vista'] = paymentTypeList.vista
                currPaymentType['id_financiamento'] = paymentTypeList.id_financiamento
                output.append(currPaymentType)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelPaymentType)

    def post(self):

        try:
            paymentTypeData = request.get_json()
            bank = banks(id_tipo_compra=paymentTypeData['id_tipo_compra'], 
                         vista=paymentTypeData['vista'],
                         id_financiamento=paymentTypeData['id_financiamento'])
            db.session.add(paymentTypeList)
            db.session.commit()
        
            return jsonify(paymentTypeData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400") 

@name_space.route('/payment')
class gpPayment(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allPayment = payment.query.all()
            output = []
            for paymentList in allPayment:
                currPayment = {}
                currPayment['id_compra'] = paymentList.id_compra
                currPayment['id_vendedor'] = paymentList.id_vendedor
                currPayment['id_cli'] = paymentList.id_cli
                currPayment['valor_compra'] = paymentList.valor_compra
                currPayment['id_tipo_compra'] = paymentList.id_tipo_compra
                output.append(currPayment)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelPayment)

    def post(self):

        try:
            paymentData = request.get_json()
            bank = banks(id_compra=paymentData['id_compra'], 
                         id_vendedor=paymentData['id_vendedor'],
                         id_cli=paymentData['id_cli'],
                         valor_compra=paymentData['valor_compra'],
                         id_tipo_compra=paymentData['id_tipo_compra'])
            db.session.add(paymentList)
            db.session.commit()
        
            return jsonify(paymentData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400") 

@name_space.route('/immobileTypes')
class gpImmobileType(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allImmobileType = immobile_type.query.all()
            output = []
            for immobileTypeList in allImmobileType:
                currImmobileType = {}
                currImmobileType['id_tipo_imovel'] = immobileTypeList.id_tipo_imovel
                currImmobileType['tipo_imovel'] = immobileTypeList.tipo_imovel
                output.append(currImmobileType)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelImmobileType)

    def post(self):

        try:
            immobileTypeData = request.get_json()
            immobileType = immobile_type(id_tipo_imovel=immobileTypeData['id_tipo_imovel'], 
                                         tipo_imovel=immobileTypeData['tipo_imovel'])
            db.session.add(immobileType)
            db.session.commit()
        
            return jsonify(immobileTypeData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

@name_space.route('/immobile')
class gpImmobile(Resource):
    
    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'id': 'Specify the Id associated with the person' })

    def get(self):
        try:

            allImmobile = immobile.query.all()
            output = []
            for immobileList in allImmobile:
                currImmobile = {}
                currImmobile['id_imovel'] = immobileList.id_imovel
                currImmobile['id_endereco_imov'] = immobileList.id_endereco_imov
                currImmobile['id_owner'] = immobileList.id_owner
                currImmobile['id_vendedor'] = immobileList.id_vendedor
                currImmobile['id_tipo_imovel'] = immobileList.id_tipo_imovel
                currImmobile['id_compra'] = immobileList.id_compra
                output.append(currImmobile)
                # output = request.get_json()
            return jsonify(output)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not retrieve information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not retrieve information", statusCode = "400")

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, params={ 'id': 'Specify the Id associated with the person' })
    @app.expect(modelImmobile)

    def post(self):

        try:
            immobileData = request.get_json()
            immobiles = immobile(id_imovel=immobileData['id_imovel'], 
                                 id_endereco_imov=immobileData['id_endereco_imov'],
                                 id_owner=immobileData['id_owner'],
                                 id_vendedor=immobileData['id_vendedor'],
                                 id_tipo_imovel=immobileData['id_tipo_imovel'],
                                 id_compra=immobileData['id_compra'])
            db.session.add(immobileList)
            db.session.commit()
        
            return jsonify(immobileData)

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

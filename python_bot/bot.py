import logging
import uuid
import datetime
import time
import dazl

dazl.setup_default_logger(logging.INFO)
EPOCH = datetime.datetime.utcfromtimestamp(0)
def main():

	network = dazl.Network()
	network.set_config(url='http://localhost:6865')
	client = network.simple_party('Operator')
	contractIdProposals = []

	@client.ledger_ready()
	def bot_ready(event): 
		logging.info(f'user_bot for party {client} is ready')

	@client.ledger_created('Main.Covid19Test')
	def on_message(event):
		contractIdProposals.append(event.cid)
		logging.info(contractIdProposals)

	@client.ledger_exercised('Main.Covid19Test','UpdateCovid19Test')
	def final_agreement_created(event):
		contractIdProposals.remove(event.cid)
		for contractId in contractIdProposals:
			client.submit_exercise(contractId, 'RejectOffer')

	network.run_forever()

if __name__ == '__main__':
    main()
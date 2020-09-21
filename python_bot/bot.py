import logging
import uuid
import datetime
import time
import dazl

dazl.setup_default_logger(logging.INFO)
EPOCH = datetime.datetime.utcfromtimestamp(0)

def main():

    # url = os.getenv('DAML_LEDGER_URL')
    url = 'http://localhost:6865'
    # party = os.getenv('DAML_LEDGER_PARTY')
    party = 'Operator'
    
    network = dazl.Network()

    network.set_config(url=url)
    client = network.aio_party(party)

    contractIdProposals = []

    @client.ledger_ready()
    async def bot_ready(event): 
        logging.info(f'user_bot for party {client} is ready')
        contracts = await event.acs_find_nonempty('Main.Covid19Test')
        logging.info(contracts)
        dazl.exercise(contracts[0].cid, 'UpdateCovid19Test', {
            'newcovid19TestData' : contracts[0]['covid19testdata']
        })

    @client.ledger_created('Main.Covid19Test')
    def on_message(event):
        contractIdProposals.append(event.cid)
        logging.info("[on_message]")
        logging.info(event.cdata)
        logging.info(contractIdProposals)

    @client.ledger_exercised('Main.Covid19Test','UpdateCovid19Test')
    def final_agreement_created(event):
        contractIdProposals.remove(event.cid)
        logging.info("[final_agreement_created]")
        logging.info(contractIdProposals)
        for contractId in contractIdProposals:
            client.submit_exercise(contractId, 'RejectOffer')

    network.run_forever()

if __name__ == '__main__':
    main()
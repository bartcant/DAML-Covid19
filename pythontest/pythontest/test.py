import logging
import uuid
import datetime
import time
import dazl
import asyncio

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

    @client.ledger_ready()
    async def bot_ready(event): 
        logging.info(f'user_bot for party {client} is ready')
        contract = {'operator': 'Operator',
                    'party': 'Citi', 'roletype': 'Citizen'}
        return client.submit_create('Main.PartyInvitation', contract)

    # with dazl.simple_client('http://localhost:6865', 'Operator') as client:
    #     contract = {'operator': 'Operator',
    #                 'party': 'Citi', 'roletype': 'Citizen'}
    #     client.ready()
    #     client.submit_create('Main.PartyInvitation', contract)

    network.run_forever()


if __name__ == '__main__':
    main()

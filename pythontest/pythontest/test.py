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
    # url = 'http://localhost:6865'
    # party = os.getenv('DAML_LEDGER_PARTY')
    party = 'Operator'

    network = dazl.Network()

    # network.set_config(url=url)
    client = network.aio_party(party)

    with dazl.simple_client('http://localhost:6865', 'Operator') as client:
        contract = {'operator': 'Operator',
                    'party': 'Citi', 'roletype': 'Citizen'}
        client.ready()
        client.submit_create('Main.PartyInvitation', contract)


if __name__ == '__main__':
    main()

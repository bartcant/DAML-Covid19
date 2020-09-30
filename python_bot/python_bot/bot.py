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


    async def callUpdateCovid19Test(cid, newData):
        logging.info("[callUpdateCovid19Test]")
        if newData['testresult'] == 'Pending':
            newData['testresult'] = 'Negative'
            logging.info(cid)
            logging.info(newData)
            # using UpdateCovid19Test choice
            return dazl.exercise(cid, 'UpdateCovid19Test', {
                'newcovid19TestData' : newData,
                })


    @client.ledger_ready()
    async def bot_ready(event): 
        logging.info(f'user_bot for party {client} is ready')
        contracts = await event.acs_find_nonempty('Main.Covid19Test')
        logging.info(contracts)

        tasks = [
            callUpdateCovid19Test(contractID, contractData['covid19testdata']) 
            for contractID, contractData in contracts.items()
            ]
        for f in asyncio.as_completed(tasks):
            result = await f
        return result
        

    @client.ledger_created('Main.Covid19Test')
    def on_message(event):
        logging.info("[on_message]")
        # logging.info(event.cid)
        # logging.info(event.cdata)
        return callUpdateCovid19Test(event.cid, event.cdata['covid19testdata'])

    @client.ledger_exercised('Main.Covid19Test','UpdateCovid19Test')
    def on_updated(event):
        logging.info("[on_updated]")
        logging.info(event.cid)
        logging.info(event.cdata)


    network.run_forever()



if __name__ == '__main__':
    main()
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


    @client.ledger_ready()
    async def bot_ready(event): 
        logging.info(f'user_bot for party {client} is ready')
        contracts = await event.acs_find_nonempty('Main.Covid19Test')
        logging.info(contracts)
        # return dazl.exercise(contracts[0], 'UpdateCovid19Test', {})
        

    @client.ledger_created('Main.Covid19Test')
    def on_message(event):
        logging.info("[on_message]")
        logging.info(event.cid)
        logging.info(event.cdata)
        newData = event.cdata['covid19testdata']
        newData['testresult'] = 'Negative'
        logging.info(newData)
        # 1st option
        # using UpdateCovid19Test choice
        return dazl.exercise(event.cid, 'UpdateCovid19Test', {
            'newcovid19TestData' : newData,
            })
        # 2nd option
        # using UpdateTestResult choice
        # return dazl.exercise(event.cid, 'UpdateTestResult', {})

    @client.ledger_exercised('Main.Covid19Test','UpdateCovid19Test')
    def on_updated(event):
        logging.info("[on_updated]")
        logging.info(event.cid)
        logging.info(event.cdata)

    @client.ledger_exercised('Main.Covid19Test','UpdateTestResult')
    def on_updated_result(event):
        logging.info("[on_updated_result]")
        logging.info(event.cid)
        logging.info(event.cdata)


    network.run_forever()

if __name__ == '__main__':
    main()
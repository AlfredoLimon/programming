from binance.client import Client 
import pandas as pd
import k

client = Client(api_key=k.pk, api_secret=k.sk)

# balance = client.get_asset_balance(asset='BTC')

# print (balance)

#status = client.get_account()
pd.set_option('float_format', '{:f}'.format)

def grab_balance():
    status=client.get_account()
    clean_df=pd.DataFrame(status['balances'])
    for index, row in clean_df.iterrows():
        if float(row['free']) < 0.001:  
            clean_df.drop(index, inplace=True)

    #clean_df['asset']= clean_df['asset'].astype(str) + 'BTC'
    #clean_df.set_index('asset', inplace=True)
    return clean_df

def grab_btc_equivalent():
    price = client.get_all_tickers()
    price_df = pd.DataFrame(price)
    return(price_df)


print (grab_btc_equivalent())
#print(grab_balance())



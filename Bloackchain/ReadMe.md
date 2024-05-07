# E-Voting by using Private Ethereum Blockchain

## To Run this project follow these steps

### Installing prerequisites
The prerequisites for developing the dapp. The versions required are listed below :

- NVM v8.11.3
- NPM v5.6.0
- GoLang (aka go) v1.10.3
- Geth v1.8.27-stable

## Before running the project change path of the file 'main.js' in server folder on line 07 

### After that Open terminal in E-Voting-Eth folder and type 

#### 1- Start Node
```
geth --datadir "./Node1" --networkid 1999 --identity "testNet" --http --http.vhosts "*" --http.port "8081" --http.corsdomain "*" --http.addr 127.0.0.1 --http.api "db,eth,net,web3,personal,miner,admin" --port "30301" --allow-insecure-unlock

```
### Open another terminal in same directory 
##### 2- Attach the node 

```
geth attach http://127.0.0.1:8081

personal.unlockAccount(web3.eth.coinbase, "seed 1", 1500000)

miner.start()

```
### Open another terminal in same directory

```
truffle compile

truffle migrate

```

### Run the project 

``` 
npm run dev

```


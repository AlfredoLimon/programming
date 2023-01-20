const webSocket=require('ws')
const peers=process.env.PEERS ? process.env.PEERS.split(',') : []
const P2P_PORT=process.env.P2P_PORT || 5001

class p2pServer{
    constructor(blockchain){
        this.blockchain=blockchain
        this.socket=[]
    }

    listen(){
        const server=new webSocket.Server({port:P2P_PORT})
        server.on('connection',socket=>this.connectSocket(socket))
        this.connectToPeers()
        console.log('listening for peer to peer connection on port '+P2P_PORT)
    }

    connectToPeers(){
        peers.forEach(peers=>{
            const socket=new webSocket(peers)
            socket.on('open',()=> this.connectSocket(socket))
            })
    }

    connectSocket(socket){
        this.socket.push(socket)
        console.log('[+]Socket connected')
        this.messageHandler(socket)
        //socket.send(JSON.stringify(this.blockchain.chain))
        this.sendChain(socket)
    }

    messageHandler(socket){
        socket.on('message',message =>{
            const data=JSON.parse(message)
           // console.log('data',data )
           this.blockchain.replaceChain(data)
        })
    }

    sendChain(socket){
        socket.send(JSON.stringify(this.blockchain.chain))
    }

    syncChains(){
        this.socket.forEach(socket =>{
        this.sendChain(socket)

        })
    }
}

module.exports=p2pServer
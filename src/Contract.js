import contractABI from './contractABI';
import { ethers } from 'ethers';

class Contract {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = this.provider.getSigner();
    
    async doTxn(txnParams) {
        // var cont = new ethers.Contract('0xa16E05c799ae436D4c7e3e64C73b3704CE444FCc', contractABI, this.signer);
        // var cont = new ethers.Contract('0x53ed40b6AaF1c46Dd7B10C60f7e19b8290B6369c', contractABI, this.signer);
        // var cont = new ethers.Contract('0xecF2adfFe79CBaEac0730891d4326e36395AafcB', contractABI, this.signer);
        var cont = new ethers.Contract('0x6eCa6EBCDdFf469a9285ADE8a33171943CDa0D68', contractABI, this.signer);
        return await cont.connect(this.signer).fund(txnParams);
    }
    async doBuy(txnParams) {
        // var cont = new ethers.Contract('0xa16E05c799ae436D4c7e3e64C73b3704CE444FCc', contractABI, this.signer);
        // var cont = new ethers.Contract('0x53ed40b6AaF1c46Dd7B10C60f7e19b8290B6369c', contractABI, this.signer);
        // var cont = new ethers.Contract('0x6eCa6EBCDdFf469a9285ADE8a33171943CDa0D68', contractABI, this.signer);
        var cont = new ethers.Contract('0xecF2adfFe79CBaEac0730891d4326e36395AafcB', contractABI, this.signer);
        return await cont.connect(this.signer).buy(txnParams);
    }
}

export default Contract;
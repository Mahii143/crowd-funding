import React from 'react'
// import { ethers } from 'ethers';
import Contract from '../Contract';
const Connect = require('../Connect');

async function getConnection() {
    return await new Connect().getConnect();
}
async function fundTheTx(txnParams) {
    const contract = new Contract();
    const fundTx = await contract.doTxn(txnParams);
    const fundReceipt = await fundTx.wait(1);
    console.log('Fund transaction receipt:', fundReceipt);
}
async function buyTheProduct(txnParams) {
    const contract = new Contract();
    const fundTx = await contract.doBuy(txnParams);
    const fundReceipt = await fundTx.wait(1);
    console.log('Fund transaction receipt:', fundReceipt);
}


export default function ViewComponent(props) {
    const data = props.data;
    let wei = 0;
    async function handleChange(event) {
        wei= event.target.value;
    }

    // ethers code  --------------------------------
    async function handleSubmit(event) {
        await getConnection();
        // Check if MetaMask is installed and connected
        if (typeof window.ethereum === 'undefined') {
            console.error('MetaMask is not installed');
        } else {
            // const fundAmount = ethers.utils.parseUnits('10000', 'wei'); // 10000 wei
            const transactionParameters = {
                value: wei
            };

            // Call the fund() function
            if(event.target.id === 'fund')
            await fundTheTx(transactionParameters);
            else
            await buyTheProduct(transactionParameters);

        }

    }

    // ethers code --------------------------------

    return (
        <div className='project-full-view'>
            <h1 className="project-view-title">
                Project {data.pid - 99}: {data.pname}
            </h1>
            <p className="project-view-description">
                <span className='project-view-label'>
                    Project Description:
                </span>
                {data.pdesc}
            </p>
            <span className='project-view-author'>
                <span className='project-view-label'>
                    Author name:
                </span>
                Mohamed Mahir A S
            </span>
            <span className='project-view-proposed-date'>
                <span className='project-view-label'>
                    Proposed Date:
                </span>
                08-03-23
            </span>
            <span className='project-view-estimated-mcap'>
                <span className='project-view-label'>
                    Estd. Market cap:
                </span>
                10000000$
            </span>
            <p className='project-view-patent'>
                <span className='project-view-label'>
                    Patent Details:
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatum velit! Itaque, at iste. Ullam possimus debitis, neque perspiciatis repellat asperiores ad, repudiandae veniam dolor optio fugit at voluptates laborum similique dignissimos tenetur qui corporis placeat distinctio laudantium sapiente consequatur laboriosam dolores. Dolor dolorum natus, consequatur veniam ea sed quisquam.
            </p>
            <div className="project-view-images">
                <span className='project-view-label'>
                    Attachments:
                </span>
                <img src="" alt="img1" />
            </div>
            <input type="number" id='amount'onChange={handleChange}/>
            <button class="button-6" id='fund' onClick={ handleSubmit }>Fund</button>


            <input type="number" id='amount'onChange={handleChange}/>
            <button class="button-6" id='buy' onClick={ handleSubmit }>Buy</button>
        </div>
    )
}

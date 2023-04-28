class Connect {
    async getConnect() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    async connect() {
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" });
        } else {
            console.log("Metamask not detected.");
        }
    }
}

module.exports = Connect;

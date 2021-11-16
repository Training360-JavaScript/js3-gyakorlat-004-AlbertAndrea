const checkMac = (MacAdress) => {
    const pattern = /^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/;
    return MacAdress.match(pattern);
}

export default checkMac;
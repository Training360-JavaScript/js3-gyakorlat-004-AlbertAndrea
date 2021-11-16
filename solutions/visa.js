const checkVisa = (cardNumber) => {
    const pattern = /^4{1}\d{15}$/;
    return cardNumber.match(pattern);
}

export default checkVisa;
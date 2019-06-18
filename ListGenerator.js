function generateList(length) {
    const result = [];
    while(length-- > 0) {
        let randomNumber = Math.random() * 100 + 1;
        let roundedRandomNumber = Math.round(randomNumber);
        result.push(roundedRandomNumber);
    };
    return result;
};

exports.generateList = generateList;

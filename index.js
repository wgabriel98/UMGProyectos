exports.handler = async (event) => {
    const number1 = event.number1;
    const number2 = event.number2;
    const result = number1 * number2;

    return {
        statusCode: 200,
        body: JSON.stringify({ result: result }),
    };
};
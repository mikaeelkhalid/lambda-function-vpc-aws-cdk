exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        body: JSON.stringify('hello from lambda in a vpc!'),
    };
};

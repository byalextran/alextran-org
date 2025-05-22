export async function onRequestPost(context) {
  var json = await context.request.json();
  json.groups = [context.env.MAILERLITE_ATO_GROUP_ID];

  const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${context.env.MAILERLITE_API_KEY}`
    },
    body: JSON.stringify(json)
  });

  var responseHeaders = {
    status: response.status,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var responseMessage = {
    message: context.env.SUBSCRIPTION_SUCCESS_MESSAGE
  };

  const responseJSON = await response.json();

  switch (response.status) {
    case 200: // already subscribed
    case 201: // new subscriber
      break;
    default: // assume an error
      if (responseJSON.hasOwnProperty('message')) {
        responseMessage.message = responseJSON.message;
      } else {
        responseMessage.message = context.env.SUBSCRIPTION_FAILED_MESSAGE;
      }
  }

  return new Response(responseMessage, responseHeaders);
}

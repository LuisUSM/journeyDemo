const BASE_URL ="http://localhost:3000";

export const fetcher = async (url) =>
{
    let responseObject = { errorMessage: '', data: [] };

    try
    {
        const response = await fetch(`${BASE_URL}${url}`)
        const responseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = responseData;
    }
    catch (error)
    {
        responseObject.errorMessage = error.message;
    }

    return responseObject;
}
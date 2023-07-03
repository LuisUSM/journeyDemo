export const fetcher = async (url) =>
{
    let responseObject = { errorMessage: '', data: [] };

    try
    {
        const response = await fetch(url);
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
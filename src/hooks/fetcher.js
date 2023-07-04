export const fetcher = async (url) =>
{
    let responseObject = { errorMessage: '', data: [] };

    try
    {
        const response = await fetch(url);
        if (!response.ok) //If there was not response from the database...
        {
            //Throw an error, giving to understand that the site does not exist or was wrong typed
            throw new Error (`HTTP Error ${response.status}`);
        }
        
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
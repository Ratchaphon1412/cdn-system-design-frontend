export default defineEventHandler(async (event) => {
    try {
        const body = await readMultipartFormData(event)
        console.log(body);
        return { success: true }
    } catch(err) {
        throw createError({
            statusCode: 500,
            statusMessage: "Something went wrong"
        });
    }
})
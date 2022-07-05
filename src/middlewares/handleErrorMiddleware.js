export default async function handleError(error, req, res, next) {
    return res.sendStatus(error.type || 500);
}
const iterableUrl = 'https://api.iterable.com/api/';

module.exports = function(req, res, axios){
    return new Promise(resolve => {
        const listId = +req.params.listId;
        axios.get(iterableUrl+'lists/getUsers?listId='+listId)
            .then(response => {
                const json_array = response.data.split('\n');
                const users_array = json_array.splice(0, json_array.length-1);
                resolve(users_array);
            }).catch(err => {
            res.send(err)
        })
    })
}
function create(num){
    const array = []
        for(let i=num+1;i<(num+1)+10;i++){
            array.push(i)
        }
        return array;
}
module.exports = create;
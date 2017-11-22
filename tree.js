function Tree(node){
this.branch = node;
this.childern = [];
}

Tree.prototype.addChild = function(child) {
    this.childern.push(new Tree());
}

Tree.prototype.contains = function(child){
    let result = false;
    var inner= function(obj){
        if(obj.branch === child) result = true;
        obj.childern.forEach(function(child) {
         inner(child);   
        });
    }
    inner(this);
    return result;
}

module.exports = {Tree};

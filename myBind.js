Function.prototype.myBind = function (context) {
    return () => this.apply(context);
}

Function.prototype.myBind = function (context, ...Args) {
    return (...eachArgs) => 
}



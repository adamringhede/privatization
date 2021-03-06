function privatize(that, pf, callback) {
    var prefix = pf || '_', 
        newscope = {},
        init;
    for (var name in that) {
        if (name.substr(0, prefix.length) === prefix) {
            var nname = name.replace(prefix, '');
            if (nname === 'init') {
                init = that[name];
            } else {
                newscope[nname] = that[name];
            }
            that[name] = undefined;
        } else {
            newscope[name] = that[name];
            if (typeof that[name] === 'function') {
                var tf = that[name]; // Store a copy to prevent recursion
                that[name] = function () {
                    return tf.apply(newscope, arguments);
                };
            }
        }
    }
    if (typeof pf === 'function') {
        pf.call(newscope);
    } else if (typeof callback === 'function') {
        callback.call(newscope);
    }
    if (typeof init === 'function') {
        init.call(newscope);
    }
}
module.exports = privatize;

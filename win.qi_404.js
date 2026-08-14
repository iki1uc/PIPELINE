window.qi_404 = function(){
    out("QI · 404\n" + JSON.stringify(QI.scan({
        id:"404",
        core:false,
        fn:false,
        stable:false,
        ready:false
    }), null, 2));
};

// QI.js
export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE",
            core: !!obj.core,
            fn: !!obj.fn,
            stable: !!obj.stable,
            ready: !!obj.ready,
            respo: obj.respo360 ? true : false,
            time: Date.now()
        };
    }
};

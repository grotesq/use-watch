"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useWatch(dependencies) {
    (0, react_1.useEffect)(function () {
        if (process.env.NODE_ENV !== 'production') {
            console.log.apply(null, dependencies);
        }
    }, dependencies);
}
exports["default"] = useWatch;
//# sourceMappingURL=useWatch.js.map
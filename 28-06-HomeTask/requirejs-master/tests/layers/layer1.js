//Example layer file.

define("alpha",
    ["beta", "gamma"],
    function (beta, gamma) {
        return {
            name: "alpha",
            betaName: beta.name
        };
    }
);

define("beta",
    ["gamma"],
    function (gamma) {
        return {
            name: "beta",
            gammaName: gamma.name
        };
    }
);

define("gamma",
    ["28-06-HomeTask/requirejs-master/tests/layers/epsilon"],
    function (epsilon) {
        return {
            name: "gamma",
            epsilonName: epsilon.name
        };
    }
);

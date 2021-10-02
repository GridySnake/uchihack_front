const methodA = (method) => {
    method();
};

function A () {


    const id = 2;


    const method = (i) => {
        return function () {
            console.log(id);
            console.log(i);
        };
    };
    methodA(method(3));

}

A();
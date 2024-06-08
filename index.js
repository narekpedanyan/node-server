const myModule = (() => {
    const privateFoo = () => {}
    const privateBar = []
    const exported = {
        publicFoo: () => {},
        publicBar: () => {}
    }
    return exported
})();

console.log(myModule, 'myModule');
console.log(myModule.privateFoo, myModule.privateBar);


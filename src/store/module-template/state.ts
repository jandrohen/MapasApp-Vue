export interface IExampleStateInterface {
    prop: boolean;
}

function state(): IExampleStateInterface {
    return {
        prop: true,
    }
}

export default state;
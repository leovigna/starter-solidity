import { ExampleContract } from '../types/truffle-contracts';

import ExampleArtifact from '../build/contracts/Example.json';

const Contract = require('@truffle/contract');

export const Example = Contract(ExampleArtifact) as ExampleContract;

export const contracts = {
    Example: Example,
};
export type ContractName = keyof typeof contracts;

//patch mock artifacts object for backwards-compatibility
export const artifacts = {
    require(name: ContractName) {
        return contracts[name];
    },
};

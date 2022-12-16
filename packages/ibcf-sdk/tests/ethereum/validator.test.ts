import BigNumber from 'bignumber.js';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ethers } from 'ethers';

import * as IBCF from '../../src';
import { Override } from '../utils';

describe('Ethereum > Validator', () => {
    const host = 'http://mocked_rpc.localhost';
    const server = setupServer(...http_handlers(host, []));
    const provider = new ethers.providers.JsonRpcProvider(host);

    beforeAll(function () {
        server.listen();
    });

    afterAll(function () {
        server.close();
    });

    it('getCurrentSnapshot', async () => {
        const overrides = [
            {
                method: 'eth_call',
                response: {
                    result: '0x0000000000000000000000000000000000000000000000000000000000000001',
                },
            },
        ];
        server.resetHandlers(...http_handlers(host, overrides));

        const current_snapshot = await IBCF.Ethereum.Contracts.Validator.getCurrentSnapshot(
            provider,
            '0x920375eCdbf2Cc0e00Cd6C424aE58cA986cfDa32',
        );

        expect(current_snapshot.toNumber()).toEqual(1);
    });

    it('getCurrentSnapshotSubmissions', async () => {
        const overrides = [
            {
                method: 'eth_call',
                response: {
                    result: '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000',
                },
            },
        ];
        server.resetHandlers(...http_handlers(host, overrides));

        const current_snapshot_submissions = await IBCF.Ethereum.Contracts.Validator.getCurrentSnapshotSubmissions(
            provider,
            '0x920375eCdbf2Cc0e00Cd6C424aE58cA986cfDa32',
        );

        expect(current_snapshot_submissions).toEqual([]);
    });

    it('submitStateRoot', async () => {
        const overrides = [
            {
                method: 'eth_getCode',
                response: {
                    result: '0x608060405234801561001057600080fd5b50600436106100935760003560e01c80636738a0b3116100665780636738a0b31461011e57806373b70ce91461013a578063c9149eec14610156578063d1bbca1014610172578063de80bcaf1461019057610093565b80630dfe6810146100985780631fb10ca4146100c857806324b69f13146100e65780634d796c3b14610102575b600080fd5b6100b260048036038101906100ad9190610f70565b6101ac565b6040516100bf9190610fb6565b60405180910390f35b6100d0610597565b6040516100dd91906110ff565b60405180910390f35b61010060048036038101906100fb91906112a6565b610668565b005b61011c600480360381019061011791906112a6565b6108f5565b005b61013860048036038101906101339190611544565b610ad2565b005b610154600480360381019061014f919061162f565b610ca8565b005b610170600480360381019061016b919061166f565b610d29565b005b61017a610e36565b60405161018791906116ab565b60405180910390f35b6101aa60048036038101906101a591906116ff565b610e3f565b005b6000805482106040518060400160405280601681526020017f534e415053484f545f4e4f545f46494e414c495a45440000000000000000000081525090610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022091906117ab565b60405180910390fd5b50600060056000848152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156102f157838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001906001019061025f565b5050505090506000815167ffffffffffffffff81111561031457610313611137565b5b6040519080825280602002602001820160405280156103425781602001602082028036833780820191505090505b5090506000805b835181101561041e576000805b84518110156103b657848181518110610372576103716117cd565b5b602002602001015186848151811061038d5761038c6117cd565b5b602002602001015160200151036103a357600191505b80806103ae9061182b565b915050610356565b508061040a578482815181106103cf576103ce6117cd565b5b6020026020010151602001518484806103e790611873565b955060ff16815181106103fd576103fc6117cd565b5b6020026020010181815250505b5080806104169061182b565b915050610349565b5060008160ff1667ffffffffffffffff81111561043e5761043d611137565b5b60405190808252806020026020018201604052801561046c5781602001602082028036833780820191505090505b5090506000805b8360ff1681101561056f5760005b86518110156105155786818151811061049d5761049c6117cd565b5b6020026020010151602001518683815181106104bc576104bb6117cd565b5b6020026020010151036105025760018483815181106104de576104dd6117cd565b5b602002602001018181516104f2919061189c565b91509060ff16908160ff16815250505b808061050d9061182b565b915050610481565b50828181518110610529576105286117cd565b5b602002602001015160ff16838381518110610547576105466117cd565b5b602002602001015160ff16101561055c578091505b80806105679061182b565b915050610473565b50838181518110610583576105826117cd565b5b602002602001015195505050505050919050565b60606005600080548152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561065f57838290600052602060002090600202016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050815260200190600101906105cd565b50505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600981526020017f4e4f545f41444d494e000000000000000000000000000000000000000000000081525090610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072791906117ab565b60405180910390fd5b5060005b81518110156108f15760005b6004805490508110156108605760048181548110610761576107606117cd565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168383815181106107b5576107b46117cd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280601081526020017f56414c494441544f525f455849535453000000000000000000000000000000008152509061084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084391906117ab565b60405180910390fd5b5080806108589061182b565b915050610740565b506004828281518110610876576108756117cd565b5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080806108e99061182b565b915050610734565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600981526020017f4e4f545f41444d494e0000000000000000000000000000000000000000000000815250906109bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b491906117ab565b60405180910390fd5b5060005b8151811015610ace5760005b600480549050811015610aba578282815181106109ed576109ec6117cd565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1660048281548110610a1f57610a1e6117cd565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610aa75760048181548110610a7957610a786117cd565b5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b8080610ab29061182b565b9150506109cd565b508080610ac69061182b565b9150506109c1565b5050565b6000848484604051602001610ae993929190611918565b60405160208183030381529060405280519060200120905060005b8251811015610c1c576000801b838281518110610b2457610b236117cd565b5b6020026020010151600060028110610b3f57610b3e6117cd565b5b602002015103610bab5781838281518110610b5d57610b5c6117cd565b5b6020026020010151600160028110610b7857610b776117cd565b5b6020020151604051602001610b8e92919061196a565b604051602081830303815290604052805190602001209150610c09565b828181518110610bbe57610bbd6117cd565b5b6020026020010151600060028110610bd957610bd86117cd565b5b602002015182604051602001610bf092919061196a565b6040516020818303038152906040528051906020012091505b8080610c149061182b565b915050610b04565b5080610c27876101ac565b146040518060400160405280600d81526020017f50524f4f465f494e56414c49440000000000000000000000000000000000000081525090610c9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9691906117ab565b60405180910390fd5b50505050505050565b81600054146040518060400160405280601081526020017f494e56414c49445f534e415053484f540000000000000000000000000000000081525090610d24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1b91906117ab565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600981526020017f4e4f545f41444d494e000000000000000000000000000000000000000000000081525090610df1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de891906117ab565b60405180910390fd5b5080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600981526020017f4e4f545f41444d494e000000000000000000000000000000000000000000000081525090610f07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efe91906117ab565b60405180910390fd5b5080600160146101000a81548160ff021916908360ff16021790555050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610f4d81610f3a565b8114610f5857600080fd5b50565b600081359050610f6a81610f44565b92915050565b600060208284031215610f8657610f85610f30565b5b6000610f9484828501610f5b565b91505092915050565b6000819050919050565b610fb081610f9d565b82525050565b6000602082019050610fcb6000830184610fa7565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061102882610ffd565b9050919050565b6110388161101d565b82525050565b61104781610f9d565b82525050565b604082016000820151611063600085018261102f565b506020820151611076602085018261103e565b50505050565b6000611088838361104d565b60408301905092915050565b6000602082019050919050565b60006110ac82610fd1565b6110b68185610fdc565b93506110c183610fed565b8060005b838110156110f25781516110d9888261107c565b97506110e483611094565b9250506001810190506110c5565b5085935050505092915050565b6000602082019050818103600083015261111981846110a1565b905092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61116f82611126565b810181811067ffffffffffffffff8211171561118e5761118d611137565b5b80604052505050565b60006111a1610f26565b90506111ad8282611166565b919050565b600067ffffffffffffffff8211156111cd576111cc611137565b5b602082029050602081019050919050565b600080fd5b6111ec8161101d565b81146111f757600080fd5b50565b600081359050611209816111e3565b92915050565b600061122261121d846111b2565b611197565b90508083825260208201905060208402830185811115611245576112446111de565b5b835b8181101561126e578061125a88826111fa565b845260208401935050602081019050611247565b5050509392505050565b600082601f83011261128d5761128c611121565b5b813561129d84826020860161120f565b91505092915050565b6000602082840312156112bc576112bb610f30565b5b600082013567ffffffffffffffff8111156112da576112d9610f35565b5b6112e684828501611278565b91505092915050565b600080fd5b600067ffffffffffffffff82111561130f5761130e611137565b5b61131882611126565b9050602081019050919050565b82818337600083830152505050565b6000611347611342846112f4565b611197565b905082815260208101848484011115611363576113626112ef565b5b61136e848285611325565b509392505050565b600082601f83011261138b5761138a611121565b5b813561139b848260208601611334565b91505092915050565b600067ffffffffffffffff8211156113bf576113be611137565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156113eb576113ea611137565b5b602082029050919050565b6113ff81610f9d565b811461140a57600080fd5b50565b60008135905061141c816113f6565b92915050565b6000611435611430846113d0565b611197565b9050806020840283018581111561144f5761144e6111de565b5b835b818110156114785780611464888261140d565b845260208401935050602081019050611451565b5050509392505050565b600082601f83011261149757611496611121565b5b60026114a4848285611422565b91505092915050565b60006114c06114bb846113a4565b611197565b905080838252602082019050604084028301858111156114e3576114e26111de565b5b835b8181101561150c57806114f88882611482565b8452602084019350506040810190506114e5565b5050509392505050565b600082601f83011261152b5761152a611121565b5b813561153b8482602086016114ad565b91505092915050565b600080600080600060a086880312156115605761155f610f30565b5b600061156e88828901610f5b565b955050602086013567ffffffffffffffff81111561158f5761158e610f35565b5b61159b88828901611376565b945050604086013567ffffffffffffffff8111156115bc576115bb610f35565b5b6115c888828901611376565b935050606086013567ffffffffffffffff8111156115e9576115e8610f35565b5b6115f588828901611376565b925050608086013567ffffffffffffffff81111561161657611615610f35565b5b61162288828901611516565b9150509295509295909350565b6000806040838503121561164657611645610f30565b5b600061165485828601610f5b565b92505060206116658582860161140d565b9150509250929050565b60006020828403121561168557611684610f30565b5b6000611693848285016111fa565b91505092915050565b6116a581610f3a565b82525050565b60006020820190506116c0600083018461169c565b92915050565b600060ff82169050919050565b6116dc816116c6565b81146116e757600080fd5b50565b6000813590506116f9816116d3565b92915050565b60006020828403121561171557611714610f30565b5b6000611723848285016116ea565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561176657808201518184015260208101905061174b565b60008484015250505050565b600061177d8261172c565b6117878185611737565b9350611797818560208601611748565b6117a081611126565b840191505092915050565b600060208201905081810360008301526117c58184611772565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061183682610f3a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611868576118676117fc565b5b600182019050919050565b600061187e826116c6565b915060ff8203611891576118906117fc565b5b600182019050919050565b60006118a7826116c6565b91506118b2836116c6565b9250828201905060ff8111156118cb576118ca6117fc565b5b92915050565b600081519050919050565b600081905092915050565b60006118f2826118d1565b6118fc81856118dc565b935061190c818560208601611748565b80840191505092915050565b600061192482866118e7565b915061193082856118e7565b915061193c82846118e7565b9150819050949350505050565b6000819050919050565b61196461195f82610f9d565b611949565b82525050565b60006119768285611953565b6020820191506119868284611953565b602082019150819050939250505056fea26469706673582212208488abf0ce00a74ff9b6ea079bf0e8102dd283dbbe7dc2ad6d9586883db41f6e64736f6c63430008110033',
                },
            },
            {
                method: 'eth_sendRawTransaction',
                response: {
                    result: '0x2b764e72532f5f8516ace0c97b05f77163b294c962a25c7a438ee6a1881360cb',
                },
            },
        ];
        server.resetHandlers(...http_handlers('http://mocked_rpc.localhost', overrides));

        const wallet = new ethers.Wallet(
            '0x1111111111111111111111111111111111111111111111111111111111111111',
            provider,
        );

        const result = await IBCF.Ethereum.Contracts.Validator.submitStateRoot(
            wallet,
            '0xfb185d5eC7cDf42F2F9cd3Dd303214911d5b2425',
            BigNumber(1),
            '0x' + '00'.repeat(32),
        );

        expect(result.data).toEqual(
            '0x73b70ce900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000',
        );
    });
});

const mock_RPC_method = (req: any, overrides: Override[]) => {
    for (const override of overrides) {
        if (req.body.method == override.method) {
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                ...override.response,
            };
        }
    }
    switch (req.body.method) {
        case 'eth_blockNumber':
            return {
                jsonrpc: '2.0',
                id: req.body.id,
                result: '0x7c318d',
            };
        case 'eth_getTransactionCount':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: '0xfc',
            };
        case 'net_version':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: '5',
            };
        case 'eth_gasPrice':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: '0xca7e6c08',
            };
        case 'eth_estimateGas':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: '0x5e38',
            };
        case 'eth_getBlockByNumber':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: {
                    baseFeePerGas: '0xc1721a6c',
                    difficulty: '0x0',
                    extraData: '0x',
                    gasLimit: '0x1c9c380',
                    gasUsed: '0x2e36a2',
                    hash: '0x50e1c7318fd810bde6a7738c213b8e41ac77a8716050fabfc8485600edd0a23f',
                    logsBloom:
                        '0x0030040000241008000020c480400000000a020000020802001148008840010c1024000402008200120041000080000808850000808082820004020483e0244080000020243000809808400818000064000880110384120000010114808000004221100026000aa006c1400084002d1001000202000a08082801181080010099000000a16010000080444004000001020224040104000008c14000413042004102094800000d1088000008460603080a012400011806800030102802012008010860402210000800180001020203201001001024040450100383002c000830008816a92c0000860a1008018800004102000130c8000200400248000008001001',
                    miner: '0xf36f155486299ecaff2d4f5160ed5114c1f66000',
                    mixHash: '0x2c34bf7b683f3541d3226e6d68db967430ccc4849f485b9d84194fd7aaba1c16',
                    nonce: '0x0000000000000000',
                    number: '0x7c3145',
                    parentHash: '0x426437fae3ea3bbd8dad9743289601d4869b926331751af371e6e1234ad9b3f5',
                    receiptsRoot: '0x82f4874321301be9d3978eba557566ebeb4185208334c6d9d4bcfa41222b1114',
                    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
                    size: '0x1d94',
                    stateRoot: '0xae7b8c08a97c2b7fc73342863f53d30d2f265c48897958eafb5ae56149e46a7b',
                    timestamp: '0x639afb24',
                    totalDifficulty: '0xa4a470',
                    transactions: [
                        '0x25795a1423bb1a1dc2c3125c751f0c492ef1d7cf27918429eae9b77fa60c6c8c',
                        '0xbebae9d4a3713655c63e0d213a090f97c75f24417af55e573ecefac4ff97f2a6',
                        '0x2654845443270309431af43c9b70fb1fabd60d3f7ed8d9e2c0f673adc65082d7',
                        '0xe0864c831e88582ccd93ef2ba8019759b18e8c72fba06cfb9526fa023aefa7a2',
                        '0xac4ce3018484ad8e234994687cfd59cfdc8d67e4f0f1d34c3725b440aee601ef',
                        '0x25e4982fc2b428fdbc43d57882c5d977c6d66b01b92a2d1cd034d4514012c295',
                        '0x194cfcdf355f7a3f649e3c8c4403ce5ee8907c232b3d54c2505aff206c0421e7',
                        '0xfcd5befaabf48b5d1706d8f92b0cf752d85722007ce3bfdc17d995f981ce097f',
                        '0xa7569dfb250f182137762ee689449d28f72f5fd55137226a0fe740256d6459f5',
                        '0xafa8c28b175a7af6adde12741a73fe97bd21494a31d1361c52427e4088c957f7',
                        '0x34f1baa8005e17fa6a7adcbbcfa59470f3750137d94d8312fbe7754913b26622',
                        '0xc6058396862e9098cf3fd827ae72b6ea9be1a9e89123f2f1d120485bee4cef3d',
                        '0x4ab5de2712904f87e3f02fd3cb7e799df7f72fe1195b9acbb26161b586ad38e9',
                        '0xdebad1c238c8147de29e874a824253577aff9209f84468882c94c4373a3f3984',
                        '0x8303151343723315b08ef8b3390c8b9a8b381116dd29387d61e943b1aa7d6387',
                        '0xd8e25b25b28695eb94466c7f4e632c6d10d5f76b2daf657bb31f69fb448f2d96',
                        '0x48b9669f4778911361e7fdf6164ab6623bc2fbf571e005eb5e8859243f5b6ed9',
                        '0xdcec2a5e175fb3c6353aa8aa682ba947f3cf1508f1cfbebd661c1e6afbc6d86f',
                        '0x307a378420a3b6e7eb5cfdf2e6a1dbd7f66ad650647e7483b94cc215321e5a6e',
                        '0x5f53af722d687f703fd990241bfff8c1892b12f261b060bff0782911d4d46fe2',
                        '0x5f7c5169bbf57a2a55b04a55288aeb958a5baeb5ddaea7d260909695398d7b99',
                        '0xd9ebae9570ad02110a7f6dae4a922c2aa5a8cf07dfd0ad3f330658bc94997f84',
                        '0x85fce55573b091400fa44b4b00c48d85439c643497f8c22fee9578b71a31ed63',
                        '0xfaa8a243ab8115eee26d93c32681368e84b4a8222efa382be5c48638e62ab686',
                        '0x1cdee1cd14b9a1be3b5e8fbe93008c5ec3fda3ce3be21954e0275998df658828',
                    ],
                    transactionsRoot: '0x03e497d23aad8d0048752d41975daf1330c034e76cd60d6f4c265fc99c854b42',
                    uncles: [],
                },
            };
        case 'eth_chainId':
            return {
                jsonrpc: req.body.jsonrpc,
                id: req.body.id,
                result: '0x5',
            };
    }

    console.error('The following request needs to be mocked:', JSON.stringify(req.body));
    throw new Error(`Method ${req.body.method} needs to be mocked.`);
};

function http_handlers(url: string, overrides: Override[]) {
    return [
        rest.post(`${url}/`, async (req, res, ctx) => {
            return res(ctx.json(mock_RPC_method(req, overrides)));
        }),
    ];
}

import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x94BC292f2da395746Bc58ED39565d4510FB3Bc26', // TODO
  [ChainId.TESTNET]: '0x94BC292f2da395746Bc58ED39565d4510FB3Bc26'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

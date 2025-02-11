import { Protocol } from '@uniswap/router-sdk';
import { Token, TradeType } from '@uniswap/sdk-core';
import { MixedRoute, RouteWithValidQuote, V2Route, V3Route } from '../../../../routers';
import { ChainId } from '../../../../util';
import { CachedRoute } from './cached-route';
interface CachedRoutesParams {
    routes: CachedRoute<V3Route | V2Route | MixedRoute>[];
    chainId: ChainId;
    tokenIn: Token;
    tokenOut: Token;
    protocolsCovered: Protocol[];
    blockNumber: number;
    tradeType: TradeType;
    blocksToLive?: number;
}
/**
 * Class defining the route to cache
 *
 * @export
 * @class CachedRoute
 */
export declare class CachedRoutes {
    readonly routes: CachedRoute<V3Route | V2Route | MixedRoute>[];
    readonly chainId: ChainId;
    readonly tokenIn: Token;
    readonly tokenOut: Token;
    readonly protocolsCovered: Protocol[];
    readonly blockNumber: number;
    readonly tradeType: TradeType;
    blocksToLive: number;
    /**
     * @param routes
     * @param chainId
     * @param tokenIn
     * @param tokenOut
     * @param protocolsCovered
     * @param blockNumber
     * @param tradeType
     * @param blocksToLive
     */
    constructor({ routes, chainId, tokenIn, tokenOut, protocolsCovered, blockNumber, tradeType, blocksToLive, }: CachedRoutesParams);
    /**
     * Factory method that creates a `CachedRoutes` object from an array of RouteWithValidQuote.
     *
     * @public
     * @static
     * @param routes
     * @param chainId
     * @param tokenIn
     * @param tokenOut
     * @param protocolsCovered
     * @param blockNumber
     * @param tradeType
     */
    static fromRoutesWithValidQuotes(routes: RouteWithValidQuote[], chainId: ChainId, tokenIn: Token, tokenOut: Token, protocolsCovered: Protocol[], blockNumber: number, tradeType: TradeType): CachedRoutes | undefined;
    /**
     * Function to determine if, given a block number, the CachedRoute is expired or not.
     *
     * @param currentBlockNumber
     */
    notExpired(currentBlockNumber: number): boolean;
}
export {};

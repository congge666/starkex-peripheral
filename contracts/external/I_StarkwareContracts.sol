/*
    Copyright 2021 dYdX Trading Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

pragma solidity ^0.8.0;


interface I_StarkwareContract {

  // ============ State-Changing Functions ============

  /**
    * @notice Make a deposit to the Starkware Layer2 Solution.
    *
    * @param  starkKey        The starkKey of the L2 account to deposit into.
    * @param  assetType       The assetType to deposit in.
    * @param  vaultId         The L2 id to deposit into
    * @param  quantizedAmount The quantized amount being deposited
    */
    function depositERC20(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;

    function registerAndDepositERC20(
        address ethKey,
        uint256 starkKey,
        bytes memory signature,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;
}
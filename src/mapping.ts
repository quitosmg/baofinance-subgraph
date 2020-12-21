import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  Lock,
  OwnershipTransferred,
  Transfer
} from "../generated/Contract/Contract"
import { Transaction } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleDelegateChanged(event: DelegateChanged): void {}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}

export function handleLock(event: Lock): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {

  let transaction = new Transaction(event.transaction.from.toHex());
    
//Transactions
  transaction.from = event.params.from; 
  transaction.to = event.params.to;
  transaction.value = event.params.value;

  let contract = Contract.bind(event.address);
  transaction.balanceOf = contract.balanceOf(event.params.from);

  transaction.save();
}

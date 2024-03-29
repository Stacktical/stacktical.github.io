---
layout: post
featured: false
title:  "DSLA Vesting Schedule"
author: Team
categories: [ reporting ]
image: assets/img/2019-06-26-dsla-vesting-schedule.jpg
---

## Vesting Schedule

The distribution of the DSLA tokens to token sale contributors follows a specific calendar called a vesting schedule.

> A token vesting process is a common process in which a number of tokens are secured and locked away by a company for a certain period of time. It helps to prevent market price manipulations and protect the stability of the token over time. 

## Initial allocation per token sale contributor type

### Private sale contributor
This type of contributor has obtained **25% of their total purchase, at the moment of purchase.**  

### Pre sale contributor
This type of contributor has obtained **50% of their total purchase, at the moment of purchase.**  

### Public sale contributor
This type of contributor has obtained **75% of their total purchase, at the moment of purchase.**  

## Agreement for future token allocation

According to our token sale smart contract and other signed agreements, a token sale contributor is authorized to claim **25% more DSLA from her total DSLA purchase, every 3 months, since January 1st 2018.**

Here is the corresponding vesting table:

|  | At Purchase          | March 31st          | June 30th           | September 30th           |
| :------------- | :-------------| :-------------| :-------------| :-------------|
| Private sale contributor | 25% | 50%  | 75%  | 100%  |
| Pre sale contributor | 50%  | 75%  | 100%  |  |
| Public sale contributor |  75%  | 100%  |  |  |

## How to claim (expert users)

To claim your tokens, expert user can directly call the public **claimTokens()** function from the wallet used to contribute to the DSLA token sale.

```
    /**
      * @dev Allows the sender to claim the tokens he is allowed to withdraw
      */
    function claimTokens() public {
        require(getWithdrawableAmount(msg.sender) != 0);

        uint256 amount = getWithdrawableAmount(msg.sender);
        withdrawn[msg.sender] = withdrawn[msg.sender].add(amount);

        _deliverTokens(msg.sender, amount);
    }
```

Please see [our token sale contract repository](https://github.com/Stacktical/stacktical-tokensale-contracts/blob/master/contracts/Crowdsale/DSLACrowdsale.sol) for reference.


## How to claim (all users)

#### 1/ Go to [https://stacktical.com](https://stacktical.com)  

**Note: Make sure that the address in your browser in https://stacktical.com before proceeding!**  
**Note: All DSLA tokens issued during the token sale are claimable, by now.** 

You will need the [MetaMask browser extension](https://metamask.io) to claim your DSLA tokens. 

Please install it if it's not done already, then connect to the main Ethereum network using the same account you have used during the DSLA token sale.  

#### 2/ Scroll down the homepage, all the way to the footer  

The "CLAIM DSLA TOKENS" link is located in the "SERVICE" section of our official website footer.

#### 3/ Click on the "CLAIM DSLA TOKENS" link in the footer

**If you are authorized to claim DSLA tokens with the selected MetaMask account,** click **"CLAIM NOW"** to withdraw your DSLA.  
**If you are not authorized to claim DSLA tokens**, the **"NOTHING TO CLAIM!"** message will be displayed instead.

Congratulations!
See you at [launch](https://dsla.network).

#### Possible issues :

* *The website footer keeps displaying "NOTHING TO CLAIM!" but I haven't claimed all my DSLA tokens yet...*  

Make sure your MetaMask is connected to the same account you have used during the DSLA token sale.


* *I'm using an hardware wallet, and the transactions seems to be stuck and/or my MetaMask is buggy...*  

Make sure your close your hardware wallet management software (e.g. Ledger Live) and retry.

* *The "Claim Tokens" transaction has been confirmed in MetaMask, but my DSLA balance isn't updated...*  

Make sure you have imported **the right DSLA token** in your MetaMask. Instructions [here](https://medium.com/stacktical/how-to-add-the-dsla-token-to-the-list-of-cryptocurrencies-in-your-erc-20-compatible-wallet-53266b8ce536)!

For anything else, please reach out to admins in our [official Telegram group](https://t.me/stacktical)

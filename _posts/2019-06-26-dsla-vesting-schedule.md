---
layout: post
featured: true
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
![purchase](http://progressed.io/bar/25?title=total%20purchase "purchase") 

### Pre sale contributor
This type of contributor has obtained **50% of their total purchase, at the moment of purchase.**  
![purchase](http://progressed.io/bar/50?title=total%20purchase "purchase") 

### Public sale contributor
This type of contributor has obtained **75% of their total purchase, at the moment of purchase.**  
![purchase](http://progressed.io/bar/75?title=total%20purchase "purchase") 

## Agreement for future token allocation

According to our token sale smart contract and other signed agreements, a token sale contributor is authorized to claim **25% more DSLA from her total DSLA purchase, every 3 months, since January 1st 2018.**

Here is the corresponding vesting table:

|  | At Purchase          | March 31st          | June 30th           | September 30th           |
| :------------- | :-------------| :-------------| :-------------| :-------------|
| Private sale contributor | ![purchase](http://progressed.io/bar/25) | ![purchase](http://progressed.io/bar/50)  | ![purchase](http://progressed.io/bar/75)  | ![purchase](http://progressed.io/bar/100)  |
| Pre sale contributor | ![purchase](http://progressed.io/bar/50)  | ![purchase](http://progressed.io/bar/75)  | ![purchase](http://progressed.io/bar/100)  |  |
| Public sale contributor |  ![purchase](http://progressed.io/bar/75)  | ![purchase](http://progressed.io/bar/100)  |  |  |

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

Users will need to wait for the claimTokens() feature to be available on the official Stacktical Website.   
**ETA**: July 31st


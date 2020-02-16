# BlockChain based Yo sending App

## About
By Definition **A blockchain, originally block chain, is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data** (Wikipedia defination).

DApp is made with intention to covert the most basic aspects of a block and a BlockChain.
Single Block of DApp contains **previousHash**, **currentHash**, **Message(Yo)**, **From** where previousHash is hash of previous Block, currentHash is hash of that block, Message and from mocks the transactions details.

## How to use
-  Install the app from [here](https://google.com)
-  Login with your phone number(Login Authentication in Mocked in DApp using local storage)
-  Now, On top of your fragment something like **3423225425 Click to reset** you can see your current hash. Note: Hash function used in DApp is simple hashCode().
-  Click on Green Yo button on bottom of fragment. If everything works fine your must be able to see a toast **Someone yoed you**
-  Now below **3423225425 Click to reset** you can see every block of your blockChain, Notice the pattern in hashes.
-  Now click on your Current hash ie **3423225425 Click to reset**, then manually enter your friend's hash.
-  Now you can Yo him/her all day long!!.
## How to build
open any terminal and type
~~~
git clone https://github.com/pallav12/Appathon12
~~~
or manually download zip.

Open the project in Android studio, Wait for build to finish.

## Contribution
- Opening a new Issue: If you found any bug or expect any feature please let me know by opening a issue.
- Creating a Pull Request: If you think you can make codebase better, Fork the Repo and create a PR.

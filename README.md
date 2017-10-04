# Karma Merchant API

The Merchant API is supposed to be used by the Merchant app, located at [dev.your.karma.life](http://dev.your.karma.life).

## Required (sensitive) files not checked in to VCS

- ```/config/config.json```
  - Contact a collegue to get hold of a sample config which you can use.
- ```/keys/private.key.pub```
  - SSH key local to the machine
    - You need to generate this yourself.
    - ```ssh-keygen -t rsa -b 4096 -C "your_email@karma.life"```
      - For now you need to make sure you name the key **private.key**
    - Also make sure to place it in the **/keys** directory

## Setting up the development environment

- Run ```yarn``` or ```npm install```
- Generate the **private.key** SSH Key
  - When standing in the project root run ´´´mkdir keys```
  - Then ```cd keys```
  - Finally you run```ssh-keygen -t rsa -b 4096 -C "your_email@karma.life"```
    - _For now_ you need to make sure you name the key **private.key**

## Running the server locally

- Run it using ```yarn run dev``` or ```npm run dev```

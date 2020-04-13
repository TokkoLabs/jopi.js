# Workflow 

#### Fork
To contribute to Jopi.js, start by forking the repo (TokkoLabs/jopi.js). This way you will have your own copy of Jopi to work with.
  
  
#### New Branch
Next, create a new branch in your copy of Jopi. The recommended naming behaviour is using Jira’s tickets’ tags and a short description of the feature. ie: 
```
git checkout -b JJ-34_Add-marvelous-component 
or
git checkout -b JJ-51_Changes-in-theme
```
  
  
#### Push changes
After some development, you’ll have some commits you want to push. 

:warning: Before pushing, you must fetch TokkoLabs/jopi.js/development. 
If this does not cause conflicts, proceed to **merge** the changes to your branch.
```
git fetch <TokkoLabs/jopi.js/develompent> <my-branch>
git merge origin/<my-branch>
```

Next you can push the changes to your remote
```
git push origin <my-branch>
```


When doing the push, **a pre-push procedure will fire**, testing your code.
- If the tests fail, you’ll have to go back and review your code.
- If the tests pass, you will be able to create a Pull Request, to merge your code to TokkoLabs/jopi.js/development.

#### Pull requests
A Pull Request from your branch to TokkoLabs/jopi.js/development needs the team approval. 
If your code is approved, it will be merged to the existing code in TokkoLabs/jopi.js/development, 
and from there, a Pull Request can be extended to the master branch. 

A Pull Request from development to master will automatically fire some **tests**. If the tests fail, a report will be issued.
If the tests pass, the pull request is approved and the code is merged to master.


#### Publication
The package publication in NPM is done manually, from the code in TokkoLabs/jopi.js/master.

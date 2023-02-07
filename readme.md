# Getting started

Install Hugo

On mac:
```bash
brew install hugo
```
On Linux:
```bash
sudo apt-get install hugo
```

Clone the repo with submodules:
```bash
git clone --recurse-submodules -j8 git@github.com:quebitransport/quebitransport.github.io.git
```

cd into the repo and run hugo:
```bash
cd quebitransport.github.io
hugo server -D
```

Start editing the content in the content folder. 

When ready push to main branch and the site will be automatically deployed.
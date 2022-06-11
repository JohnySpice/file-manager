## Examples of all commands call:
#File System:
- `up`
- `cd folderName`; `cd /users`; `cd ../folderInParent`
- `ls`
- `cat /users/username/file.txt`; `cat ../fileInParent.html`; `/users/username/documents/file.html`
- `add fileName.txt`
- `rn fileName.txt newFileName.txt`; `rn /users/username/documents/file.js script.js`
- `cp fileName.txt .`; `cp files/fileName.txt ../../files`; `cp /users/username/documents/file.html /users/username/downloads`
- `mv fileName.txt .`; `mv files/fileName.txt ../../files`; `mv /users/username/documents/file.html /users/username/downloads`
- `rm fileName.txt`; `rm files/fileName.txt`; `rm /users/username/documents/file.html`
# Os info
- `os --EOL`
- `os --cpus`
- `os --homedir`
- `os --username`
- `os --architecture`

#Advanced
- `hash fileName.txt`; `hash files/fileName.txt`; `hash /users/username/documents/file.html`
- `compress fileName.txt .`; `compress files/fileName.txt ../../files`; `compress /users/username/documents/file.html /users/username/downloads` (result - filename.ext.br)
- `decompress fileName.txt.br .`; `decompress files/fileName.txt.br ../../files`; `decompress /users/username/documents/file.html.br /users/username/downloads` (result - filename.ext)


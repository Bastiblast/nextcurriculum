import {spawn} from 'child_process'

const curriServer = spawn('npm', ['run', 'start'], {
  stdio: 'inherit',
  detached:true,

});

curriServer.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

curriServer.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

curriServer.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
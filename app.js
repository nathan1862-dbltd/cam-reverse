const { spawn } = require('child_process');

spawn('node', ['dist/bin.cjs', 'http_server'], {
  stdio: 'inherit'
});
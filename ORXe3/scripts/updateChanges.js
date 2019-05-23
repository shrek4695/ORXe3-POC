

    const chokidar = require('chokidar');

    // One-liner for current directory, ignores .dotfiles
    chokidar.watch('./OriginalSrc').on('all', (event, path) => {
        console.log(event, path);
    });



module.exports = {
 dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'app',
      dest: 'dist',
      src: [
        '*.{ico,png,txt}',
        '.htaccess',
        '*.html',
        'views/{,*/}*.html',
        'templates/{,*/}*.html',
        'images/{,*/}*.{webp}',
        'fonts/*'
      ]
    }, {
      expand: true,
      cwd: '.tmp/images',
      dest: 'dist/images',
      src: ['generated/*']
    }, {
      expand: true,
      cwd: 'bower_components/bootstrap/dist',
      src: 'fonts/*',
      dest: 'dist'
    }]
  },
  styles: {
    expand: true,
    cwd: 'app/styles',
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  }
};

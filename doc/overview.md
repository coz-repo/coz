
<a href="https://github.com/coz-labo/coz"><img style="height:128px;" src="doc/images/coz-banner.png" height="128"/></a>


```javascript
// Define rendering rule.
module.exports = {
  path: 'have-a-nice-day.txt', // File path to write
  tmpl: '.have-a-nice-day.txt.hbs', // Template file
  force: true, // Overwrite each time
  mode: '444',  // As readyonly file
  data: require('./my-datasource.json') // Data to render
}
```

Save this as ***.my-first-bud.bud*** , then running 
 
```bash
$ coz render ".my-first-bud.bud"
```

will do the magic.

#!/usr/bin/env node

const program = require('commander')
const Handlebars = require('handlebars')

const fs = require('fs')
const { _path } = require('./utils')
const version = require('../package').version

// 1.version
program.version(`version:${version}`)

// 2.wtoo new component/md
program
  .command('new <arg> [name]')
  .description('创建一个组件/组件文档')
  .action((arg, name) => {
    switch (arg) {
      case 'component':
        const basePath = _path(`../../w-ui/src/components/w-${name}`)

        // 文件夹
        fs.mkdirSync(basePath)

        // 各个文件内容
        const jsSource = fs.readFileSync(_path('../template/base.js'), 'utf-8')
        const jsxSource = fs.readFileSync(_path('../template/base.jsx'), 'utf-8')

        const jsTemplate = Handlebars.compile(jsSource)
        const jsxTemplate = Handlebars.compile(jsxSource)


        // 创建三个文件
        fs.writeFileSync(`${basePath}/index.js`, jsTemplate({ name: name.split('')[0].toLocaleUpperCase() + name.slice(1) }))
        fs.writeFileSync(`${basePath}/index.jsx`, jsxTemplate({ name }))
        fs.writeFileSync(`${basePath}/style.module.css`, '')

        break;
      case 'md':
        const mdSource = fs.readFileSync(_path('../template/base.md'), 'utf-8')
        const mdTemplate = Handlebars.compile(mdSource)
        const res = mdTemplate({ name })

        fs.writeFileSync(`${_path(`../../w-ui-docs/docs/component/${name}.md`)
          }`, res)

        console.log('success');
        break;
      default:
        console.log('pleace input "component" or "md"');
        break;
    }
  });


// 参数解析
program.parse(process.argv)
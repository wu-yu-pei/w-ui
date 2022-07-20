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

        // 创建三个文件
        fs.writeFileSync(`${basePath}/index.js`, 'a')
        fs.writeFileSync(`${basePath}/index.jsx`, 'b')
        fs.writeFileSync(`${basePath}/style.module.css`, 'c')

        break;
      case 'md':
        const source = fs.readFileSync(_path('../template/base.md'), 'utf-8')
        const template = Handlebars.compile(source)
        const res = template({ cname: name })

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